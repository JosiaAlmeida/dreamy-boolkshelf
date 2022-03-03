<template>
  <div class="nav-bar-d">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div
          class="nav-bar-wrapper d-flex align-items-center w-100 new-class"
          style=""
        >
          <nuxt-link class="navbar-brand" to="/">
            <img src="/assets/Logo.svg" class="img-fluid logo" alt="Logo da dreamy">
          </nuxt-link>
          <button
            @click="showmodal(true)"
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-stream" style="color: #fff0de"></i>
          </button>
          <div class="nav-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <div class="nav-content-items">
                <li class="nav-item" v-for="item in menu" :key="item.id">
                  <nuxt-link
                    class="nav-link"
                    extra-active-class="active"
                    :style="{ color: colorb }"
                    :to="item.url"
                    >{{ item.title }}</nuxt-link
                  >
                </li>
              </div>
              <li class="nav-item ml-auto">
                <div class="nav-right-content">
                  <div class="social-media">
                    <a href="#"> <i class="fab fa-pinterest-square"></i></a>
                    <a href="#"> <i class="fab fa-instagram"></i></a>
                  </div>
                  <div class="lang-option">
                    <a
                      href="#"
                      @click.prevent.stop="changeLocale('pt')"
                      :class="[showBtn ? 'active' : 'inactive']"
                      >PT</a
                    >
                    <span></span>
                    <a
                      href="#"
                      @click.prevent.stop="changeLocale('en')"
                      :class="[!showBtn ? 'active' : 'inactive']"
                      >EN</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SharedModal
        v-show="isShow"
        :showPaint="isShow"
        colorb="rgba(255, 255, 255, 0.2)"
      >
        <nav :id="isShow ? 'sidebar' : ''">
          <div :class="isShow ? 'nav-mobile collapse' : 'nav-mobile-false'">
            <div class="d-flex w-100 mb-5 justify-content-between">
              <div class="lang-option">
                <a
                  href="#"
                  @click.prevent.stop="changeLocale('pt')"
                  :class="[showBtn ? 'active-mobile' : 'inactive']"
                  >PT</a
                >
                <span></span>
                <a
                  href="#"
                  @click.prevent.stop="changeLocale('en')"
                  :class="[!showBtn ? 'active-mobile' : 'inactive']"
                  >EN</a
                >
              </div>
              <button
                class="btn btn-default btnclose"
                @click="showmodal(false)"
              >
                Fechar
                <div class="borderbtn"></div>
              </button>
            </div>
            <div class="text-center">
              <div class="nav-item" v-for="item in menu" :key="item.id">
                <nuxt-link
                  class="nav-link"
                  extra-active-class="active"
                  :style="{ color: colorb }"
                  :to="item.url"
                  >{{ item.title }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </nav>
      </SharedModal>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    colorb: {
      type: String,
      default: '#F0F1F1',
    },
  },
  computed: {
    menu() {
      return [
        {
          id: 1,
          title: this.$t('menu.aboutBd'),
          url: this.localePath('aboutdb'),
        },
        {
          id: 2,
          title: this.$t('menu.dreams'),
          url: this.localePath('dreamshelf'),
        },
        {
          id: 3,
          title: this.$t('menu.artRoom'),
          url: this.localePath('roomart'),
        },
        {
          id: 4,
          title: this.$t('menu.dreamyClub'),
          url: this.localePath('dreamclub'),
        },
        {
          id: 5,
          title: this.$t('menu.events'),
          url: this.localePath('events'),
        },
      ]
    },
  },
  methods: {
    changeLocale(lang) {
      lang = lang.toLowerCase()
      this.$router.push(this.switchLocalePath(lang))
      this.showBtn = !this.showBtn
    },
    showmodal(v) {
      this.isShow = v
    },
  },
  data() {
    return {
      showBtn: true,
      isShow: false,
    }
  },
}
</script>
<style scoped>
.nav-bar-d {
  position: absolute;
  width: 100%;
  z-index: 999;
}
.nav-back-drop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(116 115 113 / 23%);
}
.nav-bar-wrapper {
  justify-content: space-evenly;
  padding: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}
.navbar-nav {
  /* width: 100%; */
  /* column-gap: 2rem; */
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
  align-items: center;
}
.nav-content-items {
  display: flex;
  justify-content: space-evenly;
  width: 100% !important;
}
.nav-item .nav-link {
  color: #f0f1f1;
  /* font-size: 25px; */
}
.nuxt-link-exact-active.nuxt-link-active {
  border-bottom: 5px solid #d4d4ba;
}
.social-media a {
  font-size: 2rem;
  color: #28493c;
}
.lang-option a {
  color: #28493c;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
}
.lang-option span {
  border-left: 2px solid #b4c1c0;
  height: 35px;
}

.lang-option .active {
  color: #28493c !important;
}
.active-mobile {
  color: #fff0de !important;
}
.lang-option .inactive {
  color: #b4c1c0 !important;
}
.nav-collapse {
  width: 100% !important;
}
.btnclose {
  color: #fff0de;
  font-weight: 600;
}
.borderbtn {
  border-bottom: 4px solid #fff0de;
}
.logo{
  height: auto;
  width: 100px;
}
@media screen and (max-width: 990px) {
  .nav-mobile-false {
    display: none;
    overflow: hidden;
    width: 100%;
    z-index: -1000000;
  }
  #sidebar {
    width: 100vw !important;
    height: 100% !important;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(3px) !important;
  }
  .nav-bar-wrapper {
    justify-content: space-between;
  }
  .nav-collapse {
    overflow: hidden !important;
    display: none;
    height: 0px !important;
  }
  .nav-mobile {
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #1e3029;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    transition-duration: 0.5s;
    width: 60vw;
    z-index: 100000;
    padding: 5% 2%;
  }
  .nav-item {
    font-size: 1rem;
  }
}
</style>
