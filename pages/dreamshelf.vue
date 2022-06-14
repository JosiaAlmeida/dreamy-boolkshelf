<template>
  <div>
    <SharedNavbar />
    <!-- <div class="container-fluid"> -->

    <div
      class="col-12 background"
      v-if="src != null && src.length"
      :style="{
        'background-image': `url(${src[0].url}) `,
      }"
    >
      <DreamshelfHero :destaques="destaques" />
    </div>
    <div class="col-12 my-5">
      <form v-on:submit.prevent="searchDB" class="w-100">
        <input
          v-model="searchVar"
          type="text"
          placeholder="Pesquisar"
          class="form-control"
        />
      </form>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="destaques.length">
        <div class="col-md-3" v-for="(item, id) in destaques" :key="id">
          <div class="mb-3 card-container">
            <div
              style="box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              v-if="item"
            >
              <nuxt-link class="Link" :to="`arts/${item.id}`">
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
                <div class="p-3">
                  <h5 class="card-title text-center">
                    {{
                      item.title != null
                        ? item.title.substring(0, 25) + '...'
                        : ''
                    }}
                  </h5>
                  <hr />
                  <small> {{ getDate }} </small>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h4>{{ lang.title }}</h4>
      </div>
      <!-- <div class="row">
      </div>-->
    </div>
  </div>
</template>

<script>
import query from '../graphQL/graphQl-dreamydb.gql'
import queryFilter from '../graphQL/graphQl-queryFilter.gql'
export default {
  data() {
    return {
      impressoes: [],
      emAlta: [],
      filmes: [],
      montando: [],
      destaques: [],
      src: '',
      searchVar: '',
    }
  },
  mounted() {
    this.getData()
  },
  beforeUpdate() {},
  watch: {
    '$i18n.locale': {
      handler() {
        this.getData()
      },
      deep: true,
    },
  },
  methods: {
    getData() {
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
          const data = response.data
          this.destaques = this.$flattenData(data.queryDreamybdContents, 'data')
          /*this.destaques.map((item) => {
            if (item.identificador == 3) {
              this.impressoes.push(item)
            }
            if (item.identificador == 2) {
              this.emAlta.push(item)
            }
            if (item.identificador == 1) {
              this.montando.push(item)
            }
            if (item.identificador == 4) {
              this.filmes.push(item)
            }
          })*/
          this.src = res[0].src
        })
        .catch((error) => error)
    },
    searchDB() {
      this.$apollo
        .query({
          query: queryFilter,
          variables: {
            filter: `contains(data/title/${this.$i18n.locale}, '${this.searchVar}')`,
          },
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          const data = response.data
          this.destaques = this.$flattenData(data.queryDreamybdContents, 'data')
        })
        .catch((error) => error)
    },
  },
  computed: {
    lang() {
      return {
        title: this.$t('noInformation.title'),
      }
    },
  },
}
</script>

<style scoped>
.background::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(99, 110, 106, 0.5);
  background-size: cover;
  z-index: 1;
}
.background {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(117, 124, 116, 0.4);
}
.card {
  width: 100%;
  /* height: 300px; */
}
.img {
  height: 270px;
  object-fit: cover;
}
.Link:hover {
  text-decoration: none;
}
.Link {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.form-control {
  width: 40%;
  border: 1px solid #000;
  text-align: center;
  margin: auto;
}
input::placeholder {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .form-control {
    width: 100%;
  }
}
@media (max-width: 600px) {
  .background {
    height: 45vh;
  }
}
</style>
