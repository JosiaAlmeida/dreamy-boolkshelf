<template>
  <div>
    <SharedNavbar />
    <!-- <div class="container-fluid"> -->
    <!-- <div class="row"> -->
    <div class="col-12 background"  v-if="src != null && src.length" :style="{
              'background-image': `url(${src[0].url}) `,
            }">
      <DreamshelfHero :destaques="destaques" />
    </div>
    <div class="col-12">
      <SharedSearchInput />
    </div>
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      Theme="Minhas impressoes"
      to="/"
      nameLink="Ver todos"
      :data="impressoes"
      url="impressoes"
      :navContainer="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      Theme="Virou filme/Série"
      to="/"
      nameLink="Ver todos"
      :data="filmes"
      url="filmes"
      :centerMode="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      Theme="Em Alta/ top favoritos do momento"
      to="/"
      nameLink="Ver todos"
      :data="emAlta"
      url="emAlta"
      :centerMode="true"
    />
    <!-- </div> -->
    <!-- <div class="col-12"> -->
    <DreamshelfContainerElement
      Theme="Montando a estante dos sonhos"
      to="/"
      nameLink="Ver todos"
      :data="montando"
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
      src:""
    }
  },
  mounted() {
    this.getData()
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
          this.impressoes = this.$flattenData(
            data.queryMinhasimpressoesContents,
            'data'
          )
          this.emAlta = this.$flattenData(data.queryEmaltaContents, 'data')
          this.montando = this.$flattenData(
            data.queryMontandoaestanteContents,
            'data'
          )
          this.filmes = this.$flattenData(data.queryViroufilmeContents, 'data')
          this.destaques = this.$flattenData(
            data.queryDreamybdContents,
            'data'
          )
          let res  = this.$flattenData(
            data.queryImagendestaqueContents,
            'data'
          )
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
@media(max-width:600px){
.background{
  height:45vh;
}
}
</style>
