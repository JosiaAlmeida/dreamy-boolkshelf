<template>
  <div
    class="footer"
    :class="
      this.$root._route.path == '/dreamclub' ||
      this.$root._route.path == '/en/dreamclub'
        ? 'ocultFooter'
        : ''
    "
  >
    <div
      v-if="this.$root._route.path != '/aboutdb'"
      id="arrow"
      class="w-100 d-flex justify-content-center"
      :class="this.$root._route.path == '/' && 'backgroundColor'"
    >
      <div @click="scrollTop()" class="pointer text-center">
        <img src="/assets/img/svg1.svg" alt="seta para cima" />
        <p>{{ lang.title }}</p>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="container text-white text-center">
            <div class="row">
              <div class="col-md-6 col-sm-12 pt-5">
                <div class="d-flex">
                  <nuxt-link to="/">
                    <img
                      src="/assets/Logo.svg"
                      class="img img-fluid"
                      alt="icone da dreamy-boolkshelf"
                    />
                  </nuxt-link>
                  <ul class="nav flex-column pl-5">
                    <li class="nav-item" v-for="item in menu" :key="item.id">
                      <div class="d-flex algin-justify text-center">
                        <img
                          :src="item.src"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <nuxt-link class="nav-link p-0" :to="item.url">{{
                          item.title
                        }}</nuxt-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="container"><hr /></div>
        </div>
        <div class="col-12 text-center text-footer-color">
          <small>Dreamy Bookshelf 2022 All Rights</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {},
  computed: {
    configStyle() {
      return { '--backgroundColor': 'rgba(99, 110, 106, 0.4)' }
    },
    menu() {
      return [
        {
          id: 1,
          title: this.$t('menu.aboutBd'),
          url: this.localePath('aboutdb'),
          src: '/assets/img/Caminho 636.svg',
        },
        {
          id: 2,
          title: this.$t('menu.dreams'),
          url: this.localePath('dreamshelf'),
          src: '/assets/img/Caminho 636.svg',
        },
        {
          id: 3,
          title: this.$t('menu.artRoom'),
          url: this.localePath('roomart'),
          src: '/assets/img/Caminho 636.svg',
        },
        {
          id: 4,
          title: this.$t('menu.dreamyClub'),
          url: this.localePath('dreamclub'),
          src: '/assets/img/Caminho 636.svg',
        },
        {
          id: 5,
          title: this.$t('menu.events'),
          url: this.localePath('events'),
          src: '/assets/img/Caminho 636.svg',
        },
      ]
    },
    lang() {
      return {
        title: this.$t('top.title'),
      }
    },
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.footer {
  clear: both;
  position: absolute;
  bottom: -1;
  width: 100%;
}
.ocultFooter {
  visibility: hidden;
  height: 0px !important;
  position: absolute;
  top: 0;
}
.backgroundColor {
  background-color: rgba(99, 110, 106, 0.4);
  margin-top: -8px;
}
.container-fluid {
  background-color: #1e3029;
}
hr {
  background-color: #697b74;
}
.img {
  width: 100px;
  height: auto;
}
.imgLogo {
  width: 20px;
  height: 20px;
}
.text-footer-color {
  color: #f1e4d3;
}
.pointer {
  cursor: pointer;
}
a {
  color: #fff !important;
}
@media screen and (max-width: 600px) {
  .algin-justify {
    justify-content: center;
  }
}
</style>
