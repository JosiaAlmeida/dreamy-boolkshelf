<template>
  <div class="col-12">
    <VueSlickCarousel
      :autoplay="true"
      :rows="4"
      :slidesToShow="4"
      :arrows="false"
      :dots="true"
      :infinite="false"
      :adaptiveHeight="true"
      :variableWidth="true"
    >
      <div class="p-4" v-for="i in 20" :key="i">
        <div :style="RotateRandom(Math.floor(Math.random() * -20) + 15)" class="paint ml-5 mr-5 mb-4">
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
  height: 340px!important;
  width: 230px !important;
  -ms-transform: var(--rotate); /* IE 9 */
  -webkit-transform: var(--rotate); /* Safari */
  transform: var(--rotate);
  position: inherit;
}
.paint::before{
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/armario.jpg')no-repeat;
  z-index: -1;
  background-size: cover;
}
.img{
  height: 100%;
}
</style>
