<template>
  <main>
    <header id="header">
      <div class="container">
        <div class="navbar">
          <logo />
          <div class="not-logged">
            <nuxt-link to="/about">Entrar</nuxt-link>|<nuxt-link to="/about">Criar conta</nuxt-link> 
          </div>
        </div>
        <div class="row">
          <h1>Título da página</h1>
          <p>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</p>
        </div>
      </div>
    </header>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>