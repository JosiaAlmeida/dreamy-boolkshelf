<template>
  <div class="nav-bar-d">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="nav-bar-wrapper d-flex align-items-center w-100" style="">
          <nuxt-link class="navbar-brand" to="/">Navbar</nuxt-link>
          <div class="w-100" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="item in menu" :key="item.id">
                <nuxt-link
                  class="nav-link"
                  extra-active-class="active"
                  :style="{ color: colorb }"
                  :to="item.url"
                  >{{ item.title }}</nuxt-link
                >
              </li>
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
          url: this.localePath('dreamclub'),
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
  },
  data() {
    return {
      showBtn: true,
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
  column-gap: 7rem;
  justify-content: space-evenly;
  column-gap: 11rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}
.navbar-nav {
  width: 100;
  column-gap: 2rem;
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
.nav-item .nav-link {
  color: #f0f1f1;
  font-size: 25px;
}
.nav-item .nav-link.active {
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
.lang-option .inactive {
  color: #b4c1c0 !important;
}
</style>
