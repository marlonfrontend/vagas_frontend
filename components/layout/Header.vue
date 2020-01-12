<template>
  <header class="header">
    <div class="container">
      <div class="navbar d-flex justify-content-between align-items-center">
        <div class="navbar-brand">
          <img src="~/assets/images/logo.png" alt="Título da página">
        </div>
        <div class="not-logged">
          <nuxt-link to="/about">Entrar</nuxt-link>
          <span>|</span>
          <nuxt-link to="/about">Criar conta</nuxt-link> 
        </div>
      </div>
      <div class="row">
        <div class="grid-lg-6 d-flex justify-content-center flex-direction-column">
          <h1>Título da página</h1>
          <h4>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</h4>
        </div>
        <div class="grid-lg-6 d-flex align-items-center">
          <img src="~/assets/images/mockup.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>
