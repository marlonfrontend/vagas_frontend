<template>
  <main>
    <Header />
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="grid-md-4">
            <div class="card">
              <img src="~/assets/images/services/graph.png" alt="">
              <h3>Título</h3>
              <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
            </div>
          </div>
          <div class="grid-md-4">
            <div class="card">
              <img src="~/assets/images/services/alarm.png" alt="">
              <h3>Título</h3>
              <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
            </div>
          </div>
          <div class="grid-md-4">
            <div class="card">
              <img src="~/assets/images/services/notification.png" alt="">
              <h3>Título</h3>
              <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="promotional">
      <div class="container">
        <div class="wrapper">
          <h2>Vídeo promocional do app</h2>
          <h4>O vídeo mostra todas as funcionalidades e você vai conferir como funciona e ver como é fácil e simples de usar o app, falando do uso e seus benefícios.</h4>
          <div class="video">
            <div class="preview">
              <img src="~/assets/images/preview.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="brands">
      <div class="container">
        <h2>Marcas do app em destaque</h2>
        <div class="row">
          <div class="grid-md-6">
            <div class="info">
              <h3>Título</h3>
              <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
            </div>
            <div class="info">
              <h3>Título</h3>
              <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
            </div>
            <div class="info">
              <h3>Título</h3>
              <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
            </div>
          </div>
          <div class="grid-md-6">

          </div>
        </div>
      </div>
    </section>
    <section class="cta-app">
      <div class="container">
        <div class="row">
          <div class="grid-md-6">
            <img src="~/assets/images/mockup-02.png" alt="">
          </div>
          <div class="grid-md-6 d-flex justify-content-center flex-direction-column">
            <h2>Título</h2>
            <h4>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</h4>
          </div>
        </div>
      </div>
    </section>

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
                  <figure class="product-thumb">
                    <img :src="product.image" :alt="product.title">
                  </figure>
                  <div class="product-title">
                    <nuxt-link to="/">{{ product.title }}</nuxt-link>
                  </div>
                  <div class="product-store">
                    Vendido por <nuxt-link to="/">{{ product.store.name }}</nuxt-link>
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
import { getProductsWithStores } from '~/services'

export default {
  components: {
    Header,
    Footer
  },
  data:() => ({
    products: [],
    limit: 10,
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination'
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
    verifyPercentage (value) {
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
  .services {
    background-color: #f7ffdc;
    padding: 80px 0;
    .card {
      padding: 50px 35px;
      text-align: center;
      img {
        margin: 10px 0;
      }
    }
  }
  .promotional {
    padding: 100px 0;
    text-align: center;
    position: relative;
    &::before {
      content: "";
      background: url('../assets/images/sh-03.svg') no-repeat right;
      left: 0;
      right: 0;
      height: 750px;
      position: absolute;
      bottom: -200px;
    }
    .wrapper {
      max-width: 1000px;
      margin: 0 auto;
    }
    .video {
      .preview {
        position: relative;
        &::before {
          content: '';
          background: url('../assets/images/play.png') no-repeat center rgba(0,0,0,0.3);
          position: absolute;
          transition: all 300ms ease;
          cursor: pointer;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        &:hover {
          &::before {
            background-color: rgba(0,0,0,0.1);
          }
        }
      }
    }
  }
  .brands {
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    .info {
      margin-bottom: 80px;
      p {
        font-size: 20px;
        font-weight: normal;
        line-height: 2rem;
      }
    }
  }
  .cta-app {
    position: relative;
    &::before {
      content: "";
      background: url('../assets/images/sh-04.svg') no-repeat left;
      left: 0;
      right: 0;
      top: -200px;
      position: absolute;
      bottom: -50px;
    }
  }
  .most-popular-products {
    padding: 100px;
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
      .swiper-container {
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
        img {
          max-width: 100%;
          height: 180px;
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
  }
</style>