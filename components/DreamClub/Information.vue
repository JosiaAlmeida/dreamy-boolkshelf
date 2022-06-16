<template>
  <div class="container-fluid background">
    <div class="row">
      <div
        class="col-12 p-5 d-flex align-items-end align-content-end img-contain text-white"
        v-if="src != null && src.length"
        :style="{
          background: `url(${src[0].url}) no-repeat`,
        }"
      >
        <h1 class="w-50 text-white mobile-qr z-index-1">
          {{ lang.title }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import query from '~/graphQL/clube.gql'
export default {
  data() {
    return {
      src: '',
    }
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getByData()
      },
      deep: true,
    },
  },
  created() {
    this.getByData()
  },
  methods: {
    getByData() {
      this.$apollo
        .query({
          query: query,
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          let res = this.$flattenData(
            response.data.queryDestaquesclubeContents,
            'data'
          )
          this.src = res[0].src
        })
        .catch((error) => error)
    },
  },
  computed: {
    lang() {
      return {
        title: this.$t('dreamyClub.title'),
      }
    },
  },
}
</script>
<style scoped>
.background {
  height: 100vh;
  background-color: rgba(94, 106, 91, 0.5);
  position: relative;
  align-items: flex-end;
  text-align: end;
  z-index: 1;
  background: rgba(99, 110, 106, 0.5);
}
.background::before {
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  filter: brightness(0.9) grayscale(0.5);
  z-index: 1;
  background: rgba(99, 110, 106, 0.5);
}
.col-12 {
  height: 100vh;
}
.img-contain {
  background-size: cover !important;
}
@media (max-width: 600px) {
  .mobile-qr {
    width: 100% !important;
    text-align: center;
  }
}
</style>
