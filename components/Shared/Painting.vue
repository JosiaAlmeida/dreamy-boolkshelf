<template>
  <div class="row p-5">
    <div class="col-md-3 col-sm-12 p-4" v-for="(i, idx) in arts" :key="idx">
      <div
        @click="openModal()"
        :style="
          RotateRandom(Math.floor(Math.random() * -20) + 15, i.images[idx].url)
        "
        class="paint"
      ></div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import graph from '~/graphQL/graphQL-arts.gql'
export default {
  // components: { VueSlickCarousel },

  data() {
    return {
      arts: [],
    }
  },
  mounted() {
    this.getData()
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getData()
      },
      deep: true,
    },
  },
  methods: {
    RotateRandom(v, i) {
      return { '--rotate': `rotate(${v}deg)`, '--images': `url(${i})` }
    },
    getData() {
      this.$apollo
        .query({
          query: graph,
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          this.arts = this.$flattenData(
            response.data.querySaladearteContents,
            'data'
          )
        })
        .then(() => {
          console.log('Printxx', this.arts)
        })
        .catch((error) => error)
    },
  },
  computed: {
    images() {
      return { '--images': i }
    },
  },
  props: {
    ['openModal']: Function,
  },
}
</script>

<style scoped>
.paint {
  border: 20px solid #333333;
  height: 310px !important;
  width: 240px !important;
  -ms-transform: var(--rotate); /* IE 9 */
  -webkit-transform: var(--rotate); /* Safari */
  transform: var(--rotate);
  position: inherit;
  cursor: pointer;
}
.paint::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: var(--images) no-repeat;
  z-index: -1;
  background-size: cover;
}
.img {
  height: 100%;
}
</style>
