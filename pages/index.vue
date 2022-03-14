<template>
  <div>
    <SharedNavbar />
    <HomeHero />
    <HomeWhatDreamy />
    <HomeDreamStocks :destaques="destaques" />
    <RoomartTitleDescription />
    <SharedLinkMore colors="#28493C" name="Ver Galeria" to="/roomart" />
    <SharedCarouselPainting
      v-if="arts.length"
      :slideShow="3"
      :slideScroll="3"
      :row="1"
      :arrowsShow="true"
    >
      <div
        class="pt-4 pb-4 d-flex flex-column justify-content-between"
        v-for="(i, idx) in arts"
        :key="idx"
      >
        <div
          @click="findItem(i)"
          :style="
            RotateRandom(Math.floor(Math.random() * -20) + 15, i.images[0].url)
          "
          class="paint"
        ></div>
      </div>
    </SharedCarouselPainting>
    <HomePartialTitleEvents :events="events.length > 0 ? events : []" />
    <RoomartShowPaint
      :showPaint="showPaint"
      :openModal="openModal"
      :Data="itemModal"
      :description="description"
      :closeModal="closeModal"
    />
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
      events: [],
      arts: [],
      imgs: [],
      showPaint: false,
      itemModal: [],
      description: '',
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
    RotateRandom(v, i) {
      return {
        '--rotate': `rotate(${v}deg)`,
        '--images': `url(${i})`,
      }
    },
    openModal(item) {
      this.showPaint = true
      this.description = item.description
      this.itemModal = item.images
    },
    closeModal() {
      this.showPaint = false
    },
    findItem(i) {
      this.openModal(i)
    },
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
          this.events = this.$flattenData(data.queryEventsContents, 'data')
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
          this.arts = this.$flattenData(
            response.data.querySaladearteContents,
            'data'
          )
          console.log(this.arts)
        })
        .catch((error) => error)
    },
  },
}
</script>

<style scoped>
.paint {
  border: 20px solid #333333;
  height: 350px !important;
  width: 290px !important;
  -ms-transform: var(--rotate);
  /* IE 9 */
  -webkit-transform: var(--rotate);
  /* Safari */
  transform: var(--rotate);
  position: inherit;
  cursor: pointer;
}

.paint::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: var(--images) no-repeat;
  z-index: -1;
  background-size: cover;
}

.img {
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .paint {
    height: 200px !important;
    width: 150px !important;
  }
}
</style>
