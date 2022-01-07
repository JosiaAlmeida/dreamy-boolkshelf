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
      <div class="p-3" v-for="i in 20" :key="i">
        <div :style="RotateRandom(Math.floor(Math.random() * -15) + 15)" class="paint m-4">
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
  methods:{
    RotateRandom(v){
      return {'--rotate': `rotate(${v}deg)`}
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.paint {
  border: 20px solid #333333;
  height: 300px;
  width: 200px !important;
  -ms-transform: var(--rotate); /* IE 9 */
  -webkit-transform: var(--rotate); /* Safari */
  transform: var(--rotate);
}
</style>
