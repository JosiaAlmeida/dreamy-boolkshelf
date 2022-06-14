<template>
  <div class="container mt-5 mb-5">
    <div class="row flex">
      <div class="col-12 paddingLeft ocultWeb text-center">
        <h3 class="title">{{ lang.title }}</h3>
        <p>
          {{ lang.description }}
        </p>
      </div>
      <div class="col-md-7 col-sm-12">
        <img
          src="/assets/img/FullSizeRender.png"
          alt="imagem com capas de livros"
          class="img-fluid"
        />
        <SharedCardSimple paddingLeft="4%" paddingRight="4%" />
      </div>
      <div class="col-md-5 paddingLeft col-sm-12 text-center">
        <h3 class="ocultMobile">{{ lang.title }}</h3>
        <p class="ocultMobile" v-html="lang.description"></p>
        <div v-for="(item, i) in destaques.slice(0, 4)" :key="i">
          <SharedCardWidthImgLeft v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['destaques']: Array,
  },
  computed: {
    lang() {
      return {
        title: this.$t('destaqueEstante.title'),
        description: this.$t('arts.description'),
      }
    },
  },
}
</script>

<style scoped>
.marginTopNegative {
  margin-top: -5%;
}
.paddingLeft {
  padding-left: 5%;
  padding-right: 0%;
  padding-top: 0%;
  padding-bottom: 0%;
}
.ocultWeb {
  visibility: hidden;
  height: 0px;
}
@media screen and (max-width: 600px) {
  .paddingLeft {
    padding-left: 0%;
  }
  .ocultWeb {
    visibility: visible;
    height: auto;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 8%;
    padding-top: 8%;
  }
  .ocultMobile {
    visibility: hidden;
    height: 0px;
  }
  .title {
    width: 220px;
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 23px;
    font-size: 33px;
  }
}
</style>
