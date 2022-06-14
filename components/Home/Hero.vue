<template>
  <div class="container-fluid background" v-cloak>
    <div class="row">
      <div
        class="col-12 flexContainer text-white background2 p-5"
        v-if="src != null && src.length"
        :style="backgrounStyleImg(src[0].url)"
      >
        <div class="">
          <h1 class="text-padding text-white title-size \">Dreamy Bookshelf</h1>
          <p class="text-padding w-75 text-white text-body-size">
            {{ lang.title }}
          </p>
        </div>
      </div>
      <div class="col-12 img-pena text-center">
        <img
          src="/assets/img/Caminho 636.svg"
          class="img-fluid img-size"
          alt="pena"
        />
      </div>
    </div>
  </div>
</template>

<script>
import query from '~/graphQL/home.gql'
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
            response.data.queryDetaquehomeContents,
            'data'
          )
          this.src = res[0].src
          console.log(this.src)
        })
        .catch((error) => error)
    },
    backgrounStyleImg(img) {
      return { '--img': `url(${img}) no-repeat center center` }
    },
  },
  computed: {
    lang() {
      return {
        title: this.$t('home.desc'),
      }
    },
  },
}
</script>

<style scoped>
/* .titleSize {
  font-size: 47px !important;
} */
.background {
  height: 100vh !important;
  width: 100%;
  position: relative;
}
.background2::before {
  content: '';
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: var(--img);
  background-size: cover;
  filter: brightness(0.5);
}
.background2 {
  height: 100vh !important;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(99, 110, 106, 0.5);
}
.img-pena {
  margin-top: -6%;
}
.img-fluid {
  height: 71px !important;
  max-width: 50px !important;
  width: 50px !important;
}
.flexContainer {
  height: 100vh;
  display: flex;
  align-items: center;
}
.text-padding {
  padding: 0% 5% 0% 5%;
  font-size: 25px;
}
.text-white {
  color: #fff !important;
}
@media only screen and (max-width: 600px) {
  .flexContainer {
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
  .img-pena {
    margin-top: -60px !important;
  }
  .img-fluid {
    height: 71px !important;
    max-width: 50px !important;
    width: 50px !important;
  }
  .background {
    height: 50vh !important;
  }
  /* .titleSize {
    font-size: 17px !important;
  } */
  .background2 {
    height: 50vh !important;
    align-items: flex-end;
  }
  .title-size {
    font-size: 1.5rem;
  }
  .text-body-size {
    font-size: 0.8rem;
  }
  .text-padding {
    padding: 0px !important;
  }
  .img-size {
    padding: 4%;
  }
}
</style>
