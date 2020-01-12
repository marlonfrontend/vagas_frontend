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
          <nuxt-link to="/">Ver todos</nuxt-link>
        </div>
        <div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in products" :key="index">
              <div class="product-item">
                <div class="product-thumb">
                  <img :src="item.image" :alt="item.title">
                </div>
                <div class="product-title">
                  <nuxt-link to="/">Microsoft xbox one s</nuxt-link>
                </div>
                <div class="store">
                  Vendido por <nuxt-link to="/">Shoptime</nuxt-link>
                </div>
                {{ item.name }}
                {{ filterStores(item.storeid) }}
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import axios from 'axios'

export default {
  components: {
    Header,
    Footer
  },
  data:() => ({
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination'
      }
    }
  }),
  async asyncData({ params }) {
    const products = await axios.get('https://api.myjson.com/bins/1gnnec')
    const stores = await axios.get('https://api.myjson.com/bins/nher8')
    return { 
      products: products.data,
      stores: stores.data
    }
  },
  methods: {
    filterStores (idstore) {
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].id === idstore) {
          return this.stores[i].name
        }
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
    //...
  }
  .most-popular-products {
    padding: 100px;
    h2 {
      font-size: 36px;
      font-weight: normal;
    }
    .product {
      &-item{
        border: 1px solid #ccc;
        text-align: center;
        border-radius: 8px;
        padding: 20px;
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
        margin: 20px 0;
        font-size: 20px;
        height: 60px;
      }
    }
  }
</style>