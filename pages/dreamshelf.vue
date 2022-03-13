<template>
  <div>
    <SharedNavbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 background">
          <DreamshelfHero :destaques="destaques" />
        </div>
        <div class="col-12">
          <SharedSearchInput />
        </div>
        <div class="col-12">
          <DreamshelfContainerElement
            Theme="Minhas impressoes"
            to="/"
            nameLink="Ver todos"
            :data="impressoes"
            url="impressoes"
          />
        </div>
        <div class="col-12">
          <DreamshelfContainerElement
            Theme="Em Alta"
            to="/"
            nameLink="Ver todos"
            :data="emAlta"
            url="emAlta"
          />
        </div>
        <div class="col-12">
          <DreamshelfContainerElement
            Theme="Montando a estante dos sonhos"
            to="/"
            nameLink="Ver todos"
            :data="montando"
            url="montando"
          />
        </div>
        <div class="col-12">
          <DreamshelfContainerElement
            Theme="Virou filme/Série"
            to="/"
            nameLink="Ver todos"
            :data="filmes"
            url="filmes"
          />
        </div>
      </div>
    </div>
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
            data.queryDestaquesContents,
            'data'
          )
        })
        .catch((error) => error)
    },
  },
}
</script>

<style scoped>
.background {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(117, 124, 116, 0.4);
}
.background::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/shutterstock_1889758921@2x.png') no-repeat center
    center;
  background-size: cover;
  filter: brightness(0.9) grayscale(0.5);
  z-index: -1;
}
</style>
