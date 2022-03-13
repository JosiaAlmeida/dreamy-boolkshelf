<template>
  <div>
    <div class="d-flex justify-content-center mt-2" v-if="arrowsShow">
      <button
        type="button"
        class="zIndex btn btn-default"
        @click="$refs.refCarousel.prev()"
      >
        <i class="fas fa-arrow-left" style="color: #1e3029"></i>
      </button>
      <button
        class="zIndex btn btn-default"
        type="button"
        @click="$refs.refCarousel.next()"
      >
        <i class="fas fa-arrow-right" style="color: #1e3029"></i>
      </button>
    </div>
    <VueSlickCarousel class="slick-default" ref="refCarousel" v-bind="options">
      <slot></slot>
    </VueSlickCarousel>
    <div class="d-flex justify-content-center" v-if="!arrowsShow">
      <button
        type="button"
        class="zIndex btn btn-default"
        @click="$refs.refCarousel.prev()"
      >
        <i class="fas fa-arrow-left" style="color: #1e3029"></i>
      </button>
      <button
        class="zIndex btn btn-default"
        type="button"
        @click="$refs.refCarousel.next()"
      >
        <i class="fas fa-arrow-right" style="color: #1e3029"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.refCarousel)
  },
  props: {
    ['refCarousel']: Object,
    ['carouselData']: Array,
    ['slideShow']: Number,
    ['slideScroll']: Number,
    ['slideScrollMobile']: Number,
    ['row']: Number,
    ['arrowsShow']: Boolean,
    ['centerMode']: Boolean,
  },
  data() {
    return {
      options: {
        slidesToShow: this.slideShow ? this.slideShow : 3,
        infinite: true,
        speed: 500,
        centerMode: this.centerMode ? true : false,
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
