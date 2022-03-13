<template>
  <div class="row p-5">
    <div class="col-md-4 col-sm-12 p-4" v-for="(i, idx) in imgs" :key="idx">
      <div
        @click="findItem(i)"
        :style="RotateRandom(Math.floor(Math.random() * -20) + 15, i)"
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
        .then(() => {
          const item = this.arts.map((item) => item.images)
          for (let index = 0; index < item.length; index++) {
            const element = item[index].map((item) => item)
            for (let j = 0; j < element.length; j++) {
              const element2 = element[j].url
              // console.log(item[index])
              this.imgs.push(element2)
            }
          }
        })
        .catch((error) => error)
    },
    findItem(i) {
      const item = this.arts.filter((item) =>
        item.images.find((item) => item.url == i)
      )
      // console.log(item)
      this.openModal(item)
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
