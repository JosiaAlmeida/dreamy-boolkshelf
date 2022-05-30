<template>
  <div class="container-fluid background" v-cloak>
    <div class="row">
      <div class="col-12 flexContainer text-white background2 p-5" v-if="src != null && src.length" :style="{
              'background-image': `url(${src[0].url}) `,
            }">
        <div class="z-index-1 position-relative">
          <h1 class="text-padding text-white titleSize \">Dreamy Bookshelf</h1>
          <p class="text-padding w-75 text-white ">
            {{lang.title}}
          </p>
        </div>
      </div>
      <div class="col-12 imgpena text-center">
        <img src="/assets/img/Caminho 636.svg" class="img-fluid" alt="pena" />
      </div>
    </div>
  </div>
</template>

<script>
import query from '~/graphQL/home.gql'
export default {
  data() {
    return{
      src:'',
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
          query:query,
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
  },
    computed: {   
    lang() {
      return {
        title: this.$t("home.desc"),
      };
    },
  },
}
</script>

<style scoped>
.titleSize{
  font-size:47px !important;
}
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
  z-index: 1;  
  background: rgba(99, 110, 106, 0.5);
}
.background2 {
  background-size: cover;
  height: 100vh !important;
  width: 100%;
  position: relative;
  background-color: rgba(99, 110, 106, 0.5);
}
.imgpena {
  margin-top: -6%;
}
 .img-fluid {
    height: 71px !important;
    max-width: 50px !important;
    width: 50px !important;
  }
/* .background2::before {
  content: '';
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/shutterstock_1919540552-2.png') center right
    no-repeat;
  background-size: cover;
  z-index: -1;
} */
.flexContainer {
  height: 100vh;
  display: flex;
  align-items: center;
}
.text-padding {
  padding: 0% 5% 0% 5%;
  color: #b5bab9;
  font-size: 25px;
}
@media only screen and (max-width: 600px) {
  .flexContainer {
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
  .text-padding {
    padding: 0%;
  }
  .imgpena {
    margin-top: -16% !important;
    height: 30px;
  }
  .img-fluid {
    height: 71px !important;
    max-width: 50px !important;
    width: 50px !important;
  }
  .background{
    height:50vh !important;
  }
  .background2{
    height:50vh !important;
  }
}
</style>
