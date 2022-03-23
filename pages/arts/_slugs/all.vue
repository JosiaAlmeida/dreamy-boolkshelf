<template>
  <div class="container-fluid p-5">
    <nuxt-link to="/dreamshelf">Fechar</nuxt-link>
    <div class="cards-content">
      <h5 class="text-center my-4">{{ title }}</h5>
      <div
        class="m-2 d-flex flex-wrap w-100 justify-content-center"
        v-if="dreamy && dreamy.length"
      >
        <div v-for="item in dreamy" :key="item" class="m-2 card-content-item">
          <nuxt-link class="" :to="`../../arts/${item.id}?url=${url}`">
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
              <h5 class="card-title text-center">{{ item.title }}</h5>
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
export default {
  data() {
    return {
      dreamy: [],
      url: '',
      title: '',
    }
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getById(this.$route.params.slug)
      },
      deep: true,
    },
  },
  mounted() {
    ;[, this.url] = this.$route.params.slugs.split(':')
    this.getById()
    switch (this.url) {
      case 'impressoes':
        this.title = 'Minhas Impressões'
        break
      case 'emAlta':
        this.title = 'Em Alta/ top favoritos do momento'
        break
      case 'montando':
        this.title = 'Montando a estante dos sonhos'
        break
      case 'filmes':
        this.title = 'Virou filme/Série'
        break
    }
  },
  methods: {
    getDate(d) {
      const date = new Date(d)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
    getById() {
      this.$apollo
        .query({
          query:
            this.url == 'impressoes'
              ? query
              : this.url == 'emAlta'
              ? queryAlta
              : this.url == 'montando'
              ? queryMontando
              : this.url == 'filmes'
              ? queryFilmes
              : '',
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          switch (this.url) {
            case 'impressoes':
              this.dreamy = this.$flattenData(
                response.data.queryMinhasimpressoesContents,
                'data'
              )
              break
            case 'emAlta':
              this.dreamy = this.$flattenData(
                response.data.queryEmaltaContents,
                'data'
              )
              break
            case 'montando':
              this.dreamy = this.$flattenData(
                response.data.queryMontandoaestanteContents,
                'data'
              )
              break
            case 'filmes':
              this.dreamy = this.$flattenData(
                response.data.queryViroufilmeContents,
                'data'
              )
              break
          }
        })
        .catch((error) => error)
    },
  },
  computed: {},
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
.Link:hover {
  text-decoration: none;
}
.Link {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
</style>
