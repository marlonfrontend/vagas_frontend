<template>
  <header class="header">
    <div class="container">
      <div class="navbar d-flex justify-content-between align-items-center">
        <div class="navbar-brand">
          <img src="~/assets/images/logo.png" alt="Título da página">
        </div>
        <div class="not-logged d-flex align-items-center">
          <div class="user d-flex align-items-center">
            <img src="~/assets/images/user.png" alt="">
          </div>
          <div class="links">
            <nuxt-link to="/">Entrar</nuxt-link>
            <span>|</span>
            <nuxt-link to="/">Criar conta</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="grid-lg-6 d-flex justify-content-center flex-direction-column">
          <h1>Título da página</h1>
          <h4>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</h4>
          <div class="icons">
            <a href="javascript:void(0)" targe="_blank">
              <img src="~/assets/images/google-play.png" alt="">
            </a>
            <a href="javascript:void(0)" targe="_blank">
              <img src="~/assets/images/app-store.png" alt="">
            </a>
          </div>
        </div>
        <div class="grid-lg-6 d-flex align-items-center">
          <img src="~/assets/images/mockup.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .header {
    height: 100vh;
    padding: 30px 0;
    overflow: hidden;
    position: relative;
    z-index: 10;
    &::before {
      content: "";
      background: url('~assets/images/sh-01.svg') no-repeat;
      position: absolute;
      width: 1100px;
      height: 500px;
      top: 0;
      right: -5%;
    }
    /* navbar */
    .navbar {
      display: flex;
      position: relative;
      .not-logged {
        .user {
          img {
            margin: 0 15px;
          }
        }
        span {
          margin: 0 10px;
        }
        a {
          color: #111;
          font-weight: 600;
        }
      }
    }
    .icons {
      margin-top: 50px;
      a {
        &:last-child {
          margin-left: 80px;
        }
      }
    }
    .container, .row {
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .header {
      height: auto;
      &::before {
        content: "";
        background: url('~assets/images/sh-01.svg') no-repeat;
        position: absolute;
        width: 300px;
        top: 0;
        right: -10%;
      }
      .navbar {
        margin-bottom: 40px;
        .not-logged {
          .links {
            display: none;
          }
        }
      }
      .icons {
        display: flex;
        justify-content: space-between;
        margin: 0;
        a {
          &:last-child {
            margin-left: 0;
          }
        }
      }
      img {
        max-width: 100%;
      }
    }
  }
</style>
