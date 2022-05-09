<template>
  <div>
    <SharedNavbar />
    <!-- <div class="container-fluid"> -->
    <!-- <div class="row"> -->
    <div
      class="col-12 background"
      v-if="src != null && src.length"
      :style="{
        'background-image': `url(${src[0].url}) `,
      }"
    >
      <DreamshelfHero :destaques="destaques" />
    </div>
    <div class="col-12">
      <SharedSearchInput />
    </div>
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      v-show="impressoes.length"
      Theme="Minhas impressoes"
      to="/"
      nameLink="Ver todos"
      :datas="impressoes"
      url="impressoes"
      :navContainer="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      v-show="filmes.length"
      Theme="Virou filme/Série"
      to="/"
      nameLink="Ver todos"
      :datas="filmes"
      url="filmes"
      :centerMode="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      v-show="emAlta.length"
      Theme="Em Alta/ top favoritos do momento"
      to="/"
      nameLink="Ver todos"
      :datas="emAlta"
      url="emAlta"
      :centerMode="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      v-show="montando.length"
      Theme="Montando a estante dos sonhos"
      to="/"
      nameLink="Ver todos"
      :datas="montando"
      url="montando"
      :navContainer="true"
    />
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import gqlImpressoes from '../graphQL/queriesDreamyShelf.gql'
export default {
  data() {
    return {
      impressoes: [],
      emAlta: [],
      filmes: [],
      montando: [],
      destaques: [],
      src: '',
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
          query: gqlImpressoes,
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
          let res = this.$flattenData(data.queryImagendestaqueContents, 'data')
          this.destaques.map((item) => {
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
          })
          this.src = res[0].src
          console.log(this.src)
        })
        .catch((error) => error)
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
@media (max-width: 600px) {
  .background {
    height: 45vh;
  }
}
</style>
