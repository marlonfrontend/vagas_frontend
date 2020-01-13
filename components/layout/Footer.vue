<template>
  <footer class="footer">
    <div class="footer-app">
      <div class="container">
        <div class="row">
          <div class="grid-md-6">
            <div class="extension">
              <img src="~/assets/images/chrome.png" alt="">
              <a class="link" href="javascript:void(0)" target="_blank">
                <strong>Instale a extensão no seu Google Chrome.</strong>
                Text de suporte do título
              </a>
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
        <p class="brands">Lojas: Adidas, Americanas, Apple, Azul, Baby, Bebê Store, Beleza na Web, Camisaria Colombo, Carrefour, Casas Bahia, Centauro, Cipela, Cissa Magazine, Dafiti, Decathlon, Dell, efácil, Época Cosméticos, Extra, Fast Shop, Fnac, Girafa, Insinuante, Kabum, Kanui, Lenovo, Livraria Saraiva, Magazine Luiza, Marisa, MegaMamute, Mobly, Netshoes, Nike, Ponto Frio, Posthaus, Ricardo Eletro, Sépha Perfumaria, Sephora, Shopfato, Shoptime, Sony, Sou Barato, Submarino, Submarino Viagens, Super Muffato. <strong>Se sua marca não está listada, entre em contato com a nossa equipe</strong></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    &-app {
      background-color: #a5d207;
      padding: 30px 0;
      .extension, .app {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .extension {
        .link {
          color: #000;
          margin-left: 15px;
          line-height: 1.2rem;
          &:hover {
            text-decoration: underline;
          }
          strong {
            display: block;
          }
        }
      }
      .app {
        .text {
          line-height: 1.2rem;
        }
        .icons {
          display: flex;
          img {
            height: 45px;
            margin-left: 10px;
          }
        }
      }
    }
    &-content {
      background-color: #415400;
      padding: 20px 0;
      h3 {
        color: #ffffff;
        font-size: 20px;
      }
    }
    &-links {
      margin-top: 20px;
      ul {
        list-style: none;
        padding: 0;
        li {
          margin: 15px 0;
          a {
            color: #e3e6eb;
          }
        }
      }
    }
    .brands {
      font-size: 14px;
      color: #ecedf0;
      strong {
        color: #ffffff;
        font-weight: 700;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .footer {
      &-app {
        padding: 20px 0;
        .extension {
          display: none;
        }
        .app {
          display: flex;
          flex-direction: column;
          align-items: normal;
          .text {
            margin-bottom: 20px;
          }
          .icons {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            img {
              height: auto;
              max-width: 100%;
            }
          }
        }
      }
    }
  }
</style>