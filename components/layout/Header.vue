<template>
  <header id="header">
    <div class="container">
      <div class="navbar justify-content-between align-items-center">
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
        <div class="col-lg-6">
          <div class="caption">
            <h1>Título da página</h1>
            <h4>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mockup">
            <img src="~/assets/images/mockup.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
