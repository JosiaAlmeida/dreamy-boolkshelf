<template>
  <VueSlickCarousel class="slick-default" v-bind="options">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    ['carouselData']: Array,
    ['slideShow']: Number,
    ['slideScroll']: Number,
    ['row']: Number,
  },
  data() {
    return {
      options: {
        slidesToShow: this.slideShow ? this.slideShow : 3,
        infinite: true,
        speed: 500,
        slidesToScroll: this.slideScroll ? this.slideScroll : 3,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        rows: this.row ? this.row : 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
              vertical: false,
              verticalSwiping: true,
            },
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
</style>
