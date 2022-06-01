<template>
  <div class="container-fluid p-5">
    <nuxt-link to="/dreamshelf" class="Link">{{lang.title}}</nuxt-link>
    <div class="cards-content">
      <h5 class="text-center my-4">{{ title }}</h5>
      <div
        class="m-2 d-flex flex-wrap w-100 justify-content-center"
        v-if="dreamy && dreamy.length"
      >
        <div v-for="(item, i) in dreamy" :key="i" class="m-2 card-content-item">
          <nuxt-link class="" :to="`../../arts/${item.id}`">
            <img
              v-if="item.images && item.images.length"
              :src="item.images[0].url"
              class="card-img-top img-fluid img"
            />
            <img
              v-else
              src="/assets/img/armario.jpg"
              class="card-img-top img-fluid img"
              alt=""
            />
            <div class="p-3 text-center">
              <h5 class="card-title text-center">
                {{ item.title != null ? item.title.substring(0, 25)+'...' : '' }}
              </h5>
              <hr />
              <small> {{ getDate(item.created) }} </small>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import query from '~/graphQL/estante/queryImpressoes.gql'
import queryFilmes from '~/graphQL/estante/queryFilmes.gql'
import queryAlta from '~/graphQL/estante/queryAlta.gql'
import queryMontando from '~/graphQL/estante/queryMontando.gql'
import gqlImpressoes from '@/graphQL/queriesDreamyShelf.gql'
export default {
  asyncData({ params }) {
    const { slugs } = params
    return {
      slugs,
    }
  },
  data() {
    return {
      dreamy: [],
      url: '',
      title: '',
      id: null,
    }
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getById(this.slugs)
      },
      deep: true,
    },
  },
  mounted() {
    // ;[, this.url] = this.$route.params.slug
    //  this.id = this.$route.params.slug
    //  console.log(this.$route.params)
    this.getById(this.slugs)
  },
  methods: {
    getDate(d) {
      const date = new Date(d)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
    getById(id) {
      // debugger
      this.$apollo
        .query({
          query: gqlImpressoes,
          variables: {
            filter: `identificador eq '${id}'`,
          },
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          const datasResult = this.$flattenData(
            response.data.queryDreamybdContents,
            'data'
          )
          this.dreamy = datasResult.filter(
            (item) => item.identificador == this.slugs
          )
        })
        .catch((error) => error)
    },
  },
  computed: {
       lang() {
      return {
        title: this.$t("close.title"),
      };
    },
  },
}
</script>
<style scoped>
.card-content-item {
  width: 380px;
  /* height: 300px; */
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.img {
  height: 360px;
  object-fit: cover;
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
</style>
