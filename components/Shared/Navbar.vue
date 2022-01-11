<template>
  <div class="nav-bar">
    <div class="nav-back-drop"></div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="nav-bar-wrapper d-flex align-items-center w-100" style="">
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">{{
                  $t('menu.aboutBd')
                }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{{ $t('menu.dreamS') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{{ $t('menu.artRoom') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{{ $t('menu.dreamyClub') }}</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">{{ $t('menu.events') }}</a>
              </li>
              <li class="nav-item ml-auto">
                <div class="nav-right-content">
                  <div class="social-media">
                    <a href="#"> <i class="fab fa-pinterest-square"></i></a>
                    <a href="#"> <i class="fab fa-instagram"></i></a>
                  </div>
                  <div class="lang-option">
                    <!--<nux-link :to="changeLocale('pt')">PT</nux-link>
                    <span>|</span>
                    <nuxt-link :to="changeLocale('en')">EN</nuxt-link>-->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    changeLocale(lang) {
      this.$router.replace(this.switchLocalePath(lang))
    },
  },
}
</script>
<style scoped>
.nav-bar {
  background-image: url('/assets/img/armario.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.nav-back-drop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(116 115 113 / 23%);
}
.nav-bar-wrapper {
  column-gap: 7rem;
  justify-content: space-evenly;
  column-gap: 7rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}
.navbar-nav {
  width: 100;
  column-gap: 3rem;
  justify-content: space-around;
  align-items: center;
}
.nav-right-content {
  display: flex;
  align-items: center;
  column-gap: 3rem;
}
.social-media {
  display: flex;
  column-gap: 1rem;
}
.lang-option {
  display: flex;
  column-gap: 1rem;
}
.nav-item .nav-link {
  color: #fff;
  font-size: 25px;
}
.social-media a {
  font-size: 2rem;
  color: antiquewhite;
}
.lang-option a {
  color: antiquewhite;
}
</style>
