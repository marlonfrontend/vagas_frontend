<template>
  <header id="header">
    <div class="container">
      <div class="navbar">
        <div class="navbar-brand">
          <img src="~/assets/images/logo.png" alt="Título da página">
        </div>
        <div class="not-logged">
          <nuxt-link to="/about">Entrar</nuxt-link>|<nuxt-link to="/about">Criar conta</nuxt-link> 
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h1>Título da página</h1>
          <p>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</p>
        </div>
        <div class="col-lg-6">
          <img src="~/assets/images/mockup.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>
