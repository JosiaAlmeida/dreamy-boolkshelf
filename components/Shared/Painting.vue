<template>
  <div class="row p-5 justify-content-center">
    <div class="col-md-3 col-sm-12 p-4" v-for="(i, idx) in arts" :key="idx">
      <div
        @click="findItem(i)"
        :style="
          RotateRandom(Math.floor(Math.random() * -20) + 15, i.images[0].url)
        "
        class="paint"
      ></div>
    </div>
  </div>
</template>

<script>
import graph from '~/graphQL/graphQL-arts.gql'
export default {
  data() {
    return {
      arts: [],
      imgs: [],
    }
  },
  mounted() {
    this.getData()
    this.getAllImage()
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
        .catch((error) => error)
    },
    findItem(i) {
      this.openModal(i)
    },
    getAllImage() {},
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
@media(min-width: 1440px){
  .paint{
    width:80% !important;
    height:320px !important;
  }
  
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
