<template>
  <div class="col-11 mt-3">
    <VueSlickCarousel :rows="5" v-bind="slickOptions" :arrows="true" :dots="true">
      <div div v-for="i in 15" :key="i">
        <div class="cardContainer"></div>
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
  data() {
    return {
      slickOptions: {
        slidesToShow: 3
      }
    }
  }
}
</script>

<style scoped>
.cardContainer{
  width: 97%;
  height: 300px;
  border-radius: 10px;
  margin: 1%;
  background-color: rgba(115, 123, 118, 0.9);
}
</style>
