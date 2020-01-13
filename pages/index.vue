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
        <SlideProducts :items="products" @next="nextSwiper"/>
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
import SlideProducts from '~/components/home/SlideProducts'
import { getProductsWithStores } from '~/services'

export default {
  name: 'Home',
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
    CtaApp,
    SlideProducts
  },
  data:() => ({
    products: [],
    pagination: {
      skip: 0,
      limit: 4
    }
  }),
  mounted() {
    this.fetchMostPopularProducts()
  },
   methods: {
    async fetchMostPopularProducts() {
      const data = await getProductsWithStores( this.$axios, this.pagination )
      this.products = [ ...this.products, ...data ]
    },
    nextSwiper() {
      this.pagination = {
        skip: this.pagination.skip + 4,
        limit: this.pagination.limit + 4,
      }
      this.fetchMostPopularProducts()
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
  }
</style>