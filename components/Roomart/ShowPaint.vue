<template>
  <SharedModal :showPaint="showPaint" v-if="showPaint" @close="!showPaint">
    <VueSlickCarousel v-bind="options">
      <div class="d-flex" v-for="i in 6" :key="i">
        <div>
          <img src="/assets/img/armario.jpg" class="img-fluid" alt="" />
        </div>
      </div>
    </VueSlickCarousel>
  </SharedModal>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    ['showPaint']: Boolean,
  },
  data() {
    return {
      options: {
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        dots: true,
        prevArrow: true,
        nextArrow: true,
        arrows: true,
        vertical: false,
        verticalSwiping: true,
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       initialSlide: 1,
        //       vertical: true,
        //       verticalSwiping: true,
        //     },
        //   },
        // ],
      },
    }
  },
}
</script>

<style scoped>
.dflex {
  /* border: 1px solid red; */
  height: 100% !important;
  width: 100%;
  margin-top: 10%;
}
p {
  font-size: 0.8rem;
}
.bar {
  border-left: 1px solid #fff;
  height: 100%;
  width: 100%;
  padding: 1%;
}
</style>
