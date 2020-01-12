<template>
  <footer class="footer">
    <div class="footer-app">
      <div class="container">
        <div class="row">
          <div class="grid-md-6">
            <div class="extension">
              <img src="~/assets/images/chrome.png" alt="">
              <div class="text">
                <strong>Instale a extensão no seu Google Chrome.</strong>
                Text de suporte do título
              </div>
            </div>
          </div>
          <div class="grid-md-6">
            <div class="app">
              <div class="text">
                <strong>Baixe nosso app</strong>
                e não fique de fora do que acontece no produto.
              </div>
              <div class="icons">
                <img src="~/assets/images/google-play.png" alt="">
                <img src="~/assets/images/app-store.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="grid-md-3">
            <h3>Sobre</h3>
            <div class="footer-links">
              <ul>
                <li><nuxt-link to="/">Quem somos</nuxt-link></li>
                <li><nuxt-link to="/">Imprensa</nuxt-link></li>
                <li><nuxt-link to="/">Trabalhe conosco</nuxt-link></li>
                <li><nuxt-link to="/">Política de Privacidade</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Destaques</h3>
            <div class="footer-links">
              <ul>
                <li><nuxt-link to="/">Black Friday</nuxt-link></li>
                <li><nuxt-link to="/">Black Night</nuxt-link></li>
                <li><nuxt-link to="/">Dia dos Pais</nuxt-link></li>
                <li><nuxt-link to="/">Dia dos Namorados</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Contato</h3>
            <div class="footer-links">
              <ul>
                <li><nuxt-link to="/">Fale conosco</nuxt-link></li>
                <li><nuxt-link to="/">Midia Kit / Parceria</nuxt-link></li>
                <li><nuxt-link to="/">Dúvidas frequentes</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Social</h3>
            <div class="footer-social d-flex justify-content-between">
              <nuxt-link to="/"><img src="~/assets/images/social/facebook.png" alt=""></nuxt-link>
              <nuxt-link to="/"><img src="~/assets/images/social/twitter.png" alt=""></nuxt-link>
              <nuxt-link to="/"><img src="~/assets/images/social/instagram.png" alt=""></nuxt-link>
              <nuxt-link to="/"><img src="~/assets/images/social/facebook.png" alt=""></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
