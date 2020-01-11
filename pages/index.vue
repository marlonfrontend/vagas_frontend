<template>
  <main>
    <Header />
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="~/assets/images/services/graph.png" alt="">
              <h3>Título</h3>
              <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="~/assets/images/services/alarm.png" alt="">
              <h3>Título</h3>
              <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
            </div>
          </div>
          <div class="col-md-4">
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
          <div class="col-md-6">
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
          <div class="col-md-6">

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from '~/components/layout/Header'

export default {
  components: {
    Header
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
</style>