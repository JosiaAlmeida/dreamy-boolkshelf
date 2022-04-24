<template>
  <div class="container">
    <div class="">
      <nuxt-link to="/dreamshelf" class="Link">Fechar</nuxt-link>
    </div>
    <div class="my-5" v-if="dreamy && dreamy.length">
      <div class="">
        <h3 class="text-center pb-3">{{ dreamy[0].title }}</h3>
        <div class="carousel-dreamy">
          <VueSlickCarousel
            class="w-100 h-100"
            ref="refDreamy"
            v-bind="options"
            v-if="dreamy[0].images && dreamy[0].images.length"
          >
            <div
              class="carousel-dreamy-img carousel-wrapper w-100 h-100"
              v-for="(item, idx) in dreamy[0].images"
              :key="idx"
            >
              <img :src="item.url" alt="" class="w-100" />
            </div>
            <template #customPaging class="mt-5">
              <div class="custom-dot"></div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="custom-details pt-5">
          <div
            class="
              d-flex
              justify-content-between
              align-items-center
              mobile-type
            "
          >
            <h4 class="mobile-type-h4">{{ getDate }}</h4>
            <h4 class="mobile-type-h4">
              <span class="pr-3">|</span>
              {{ dreamy[0].createdByUser.displayName }}
              <span class="pl-3">|</span>
            </h4>
            <h4 class="mobile-type-h4">{{ url }}</h4>
          </div>
          <hr />
        </div>
        <div v-html="dreamy[0].content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import query from '~/graphQL/graphQL-QueryDreamy.gql'
import queryFilmes from '~/graphQL/graphQL-QueryFilmes.gql'
import queryAlta from '~/graphQL/graphQL-QueryemAlta.gql'
import queryMontando from '~/graphQL/graphQL-QueryMontando.gql'
import gqlImpressoes from '@/graphQL/queriesDreamyShelf.gql'
export default {
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return {
      slug,
    }
  },
  data() {
    return {
      routes: null,
      id: null,
      dreamy: {},
      options: {
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        dots: true,
      },
      url: '',
    }
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getById(this.$route.params.slugs)
      },
      deep: true,
    },
  },
  mounted() {
    // console.log(this.$route.query.url)
    this.id = this.$route.params.slugs
    this.url = this.$route.query.url
    // console.log('Id', this.id)
    this.getById(this.id)
  },
  beforeUpdate() {},
  methods: {
    getById(id) {
      this.$apollo
        .query({
          query: gqlImpressoes,
          variables: {
            filter: `id eq '${id}'`,
          },
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          this.dreamy = this.$flattenData(
            response.data.queryDreamybdContents,
            'data'
          )
          // console.log(this.dreamy)
        })
        .catch((error) => error)
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.dreamy[0].created)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
  },
}
</script>

<style scoped>
p {
  font-size: 0.8rem;
  text-align: start;
}
.img {
  width: 100%;
  height: 500px;
  position: relative;
  /* background-color: red; */
}
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 7px !important;
  background: url('/assets/img/armario.jpg') no-repeat;
  background-size: cover;
}

.LinkContent {
  padding: 1%;
}

.Link {
  color: #28493c;
  font-weight: 600;
  font-size: 20px;
  margin-left: -1%;
  border-bottom: 1px solid #000;
}

.Link:hover {
  text-decoration: none;
}

.text-white-title {
  color: #636e6a !important;
  font-weight: bold;
}

.text-small-grey {
  color: #bcbcbc;
}

.carousel-dreamy-img img {
  height: 600px;
  object-fit: cover;
}
.carousel-dreamy {
  width: 85%;
  height: 600px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .img {
    height: 300px;
  }

  .img::before {
    border-radius: 0px !important;
  }

  .LinkContent {
    width: 100%;
    text-align: right !important;
  }

  .carousel-dreamy-img img {
    height: 300px;
  }
  .carousel-dreamy {
    width: 85%;
    height: auto;
    margin: 0 auto;
  }
  .mobile-type {
    border-bottom: 1px solid #b5b5b5;
  }
  .mobile-type-h4 {
    font-size: 0.8rem;
    color: #b5b5b5;
  }
}
</style>
