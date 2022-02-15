<template>
  <div>
    <SharedNavbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 background">
          <DreamshelfHero />
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
          />
        </div>
        <!--<div class="col-12">
          <DreamshelfContainerElement
            Theme="Virou filme/Série"
            to="/"
            nameLink="Ver todos"
            :data="data"
          />
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import gqlImpressoes from '../graphQL/graphQL-MinhasImpressoes.gql'
export default {
  data() {
    return {
      data: [
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
        {
          img: '/assets/img/shutterstock_1889758921@2x.png',
          title: 'Img',
        },
      ],
      impressoes:[]
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
          this.impressoes = this.$flattenData(
            response.data.queryMinhasimpressoesContents,
            'data'
          )
        })
        .catch((error) => error)
    },
  }
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
