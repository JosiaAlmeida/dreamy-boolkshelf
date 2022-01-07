<template>
  <div class="col-12">
    <VueSlickCarousel
      :autoplay="true"
      :rows="2"
      :slidesToShow="4"
      :arrows="false"
      :dots="true"
      :infinite="false"
      :adaptiveHeight="true"
      :variableWidth="true"
    >
      <div class="p-3" v-for="i in 8" :key="i">
        <div class="paint">
          <h1>Dream {{ i }}</h1>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
}
</script>

<style scoped>
.paint {
  border: 20px solid #333333;
  height: 300px;
  width: 200px !important;
  -ms-transform: rotate(-15deg); /* IE 9 */
  -webkit-transform: rotate(-15deg); /* Safari */
  transform: rotate(-15deg);
}
</style>
