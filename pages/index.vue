<template>
  <main>
    <Header />
    <Services />
    <Promotional />
    <Spotlight />
    <CtaApp />
    <section class="most-popular-products">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Produtos mais acessados</h2>
          <nuxt-link to="/" class="view-all">Ver todos</nuxt-link>
        </div>
        <div class="swiper">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-item">
                  <div class="percentage" :class="verifyPercentage(product.percentage)">
                    $ {{ formatPrice(product.percentage) }}
                  </div>
                  <figure class="product-thumb d-flex align-items-center">
                    <img :src="product.image" :alt="product.title">
                  </figure>
                  <div class="product-title">
                    {{ product.title }}
                  </div>
                  <div class="product-store">
                    Vendido por <a href="http://google.com" target="_blank">{{ product.store.name }}</a>
                  </div>
                  <div class="product-price">R$ {{ formatPrice(product.price) }}</div>
                </div>
              </div>
            </div>
          </div>
          <button class="swiper-button-prev" @click="() => this.mySwiper.slidePrev()">
            <span class="icon arrow-left"></span>
          </button>
          <button class="swiper-button-next" @click="() => this.mySwiper.slideNext()">
            <span class="icon arrow-right"></span>
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Services from '~/components/home/Services'
import Promotional from '~/components/home/Promotional'
import Spotlight from '~/components/home/Spotlight'
import CtaApp from '~/components/home/CtaApp'
import { getProductsWithStores } from '~/services'

export default {
  head: {
    title: 'Título da página',
    meta: [
      { hid: 'description', name: 'description', content: 'Vaga desenvolvedor frontend na Vigia de preço' }
    ]
  },
  components: {
    Header,
    Footer,
    Services,
    Promotional,
    Spotlight,
    CtaApp
  },
  data:() => ({
    products: [],
    limit: 10,
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true
        }
      }
    }
  }),
  mounted() {
    this.fetchMostPopularProducts()
  },
   methods: {
    async fetchMostPopularProducts() {
      this.products = await getProductsWithStores( this.$axios, { limit:this.limit } )
    },
    nextSwiper() {
      this.mySwiper.slideNext()
      this.limite += 5
      this.fetchMostPopularProducts()
    },
    formatPrice(value) {
      const val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    verifyPercentage(value) {
      const res = Math.sign(value)
      switch (res) {
        case 1:
          return 'success'
        case -1:
          return 'warning'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
  .most-popular-products {
    padding: 100px 0;
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
    .view-all {
      font-weight: 600;
      color: #13bc4a;
      font-size: 18px;
    }
    .swiper {
      position: relative;
      &-container {
        padding: 20px 0;
      }
    }
    .swiper-button-prev {
      left: -70px;
    }
    .swiper-button-next {
      right: -70px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      background-color: #ffffff;
      background-image: none;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 1px solid #999;
      display: flex;
      justify-content: center;
      transition: all 200ms ease;
      .icon {
        border: solid #13bc4a;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 5px;
        transition: all 200ms ease;
        &.arrow-left {
          transform: rotate(135deg);
          margin-left: 4px;
        }
        &.arrow-right {
          transform: rotate(-45deg);
          margin-right: 4px;
        }
      }
      &:hover {
        background-color: #a5d207;
        border-color: #a5d207;
        .icon {
          border-color: #fff;
        }
      }
    }
    .product {
      &-item{
        cursor: pointer;
        border: 2px solid #ccc;
        text-align: center;
        border-radius: 8px;
        padding: 20px;
        transition: all 300ms ease;
        &:hover {
          box-shadow: 0 6px 10px rgba(0,0,0,0.16);
        }
        .percentage {
          background-color: #555;
          color: #fff;
          position: absolute;
          left: 0;
          top: 17px;
          padding: 14px 10px;
          border-radius: 0 8px 8px 0;
          font-size: 15px;
          font-weight: 600;
          &.success {
            background-color: #13bc4a;
          }
          &.warning {
            background-color: #c1180f;
          }
        }
      }
      &-thumb {
        height: 180px;
        img {
          max-width: 100%;
          max-height: 180px;
          display: block;
          margin: 0 auto;
        }
      }
      &-title {
        margin: 30px 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.2rem;
        height: 55px;
        overflow: hidden;
      }
      &-store {
        font-size: 14px;
        color: #666;
        a {
          font-weight: 700;
          color: #3eaed2;
        }
      }
      &-price {
        margin: 15px 0;
        font-size: 23px;
        color: #5555d9;
        font-weight: 700;
      }
    }
    @media screen and (max-width: 768px) {
      .swiper {
        margin: 0 -15px;
      }
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
    @media screen and (max-width: 576px) {
      .swiper {
        margin: 0 15px;
      }
    }
  }
</style>