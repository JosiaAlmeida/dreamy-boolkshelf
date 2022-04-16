<template>
  <div class="container mt-5" v-if="array && array.length > 0">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="row flex-wrap" v-if="array[0].src">
          <div class="col-6" :class="[id == 0 ? 'mt-3': '', id == 2 ? 'margin-negative-top2' : '', id == 3 ? 'margin-negative-top' : '' ]" v-for="(item, id) in array[0].src" :key="id">
            <img
              :src="item.url"
              class="img-fluid img"
              :class="[id == 0 ? 'mt-5': '', id == 2 ? 'img-mobile-ocult img-mt-5  mt-5' : '', id == 3 ? 'img-mobile-ocult': '']"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 text-styles">
        <div class="text-content-style">
          <h3 class="title">{{array[0].title}}</h3>
          <p>{{array[0].description}}</p>
          <p>{{array[0].description2}}</p>
          <p>{{array[0].description3}}</p>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import query from '~/graphQL/graphQl-aboutdb.gql'
export default {
  data() {
    return {
      array: []
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
          this.array = this.$flattenData(
                response.data.queryAboutdbContents,
                'data'
              )
              

        })
        .catch((error) => error)
    },
  }
}


</script>

<style scoped>
.row {
  padding: 4%;
}
.img {
  height: 300px;
  width: 100% !important;
  object-fit: cover;
}
.text-styles {
  padding: 5%;
  display: flex;
  align-items: center;
}
.text-content-style {
  color: #5d707a;
}

.margin-negative-top {
  margin-top: -7%;
}
.margin-negative-top2 {
  margin-top: -4%;
}
h3 {
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .text-styles {
    margin-bottom: 60px;
  }
  .img-mobile-ocult {
    display: none;
  }
  .img-visible-mobile {
    visibility: visible;
    height: 300px !important;
  }
  .img {
    height: 210px !important;
  }
  .text-content-style {
    text-align: center;
  }
  .title {
    max-width: 330px;
  }
}
</style>
