<template>
  <VueSlickCarousel class="slick-default" v-bind="options">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
export default {
  props: {
    ['carouselData']: Array,
    ['slideShow']: Number,
    ['slideScroll']: Number,
    ['slideScrollMobile']: Number,
    ['row']: Number,
  },
  data() {
    return {
      options: {
        slidesToShow: this.slideShow ? this.slideShow : 3,
        infinite: true,
        speed: 500,
        slidesToScroll: this.slideScroll ? this.slideScroll : 3,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        rows: this.row ? this.row : 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: this.slideScrollMobile ? this.slideScrollMobile : 2,
              slidesToScroll: 1,
              initialSlide: 1,
              rows: 1,
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
