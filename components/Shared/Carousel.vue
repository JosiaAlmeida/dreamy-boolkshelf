<template>
  <div class="col-md-11 col-sm-12 mt-3 mb-4">
    <VueSlickCarousel class="slick-default" v-bind="options">
      <div class="mb-4" v-for="(item, i) in carouselData" :key="i">
        <nuxt-link class="Link" :to="'event/' + i">
          <div
            class="cardContainer d-flex align-items-end p-4"
            :style="imageProps(item.img)"
          >
            <div class="w-75">
              <h6>{{ item.title }}</h6>
              <small class="text-small-grey"> {{ item.date }} </small>
            </div>
          </div>
        </nuxt-link>
      </div>
      <!-- <template #customPaging class="mt-5">
        <div class="custom-dot"></div>
      </template> -->
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              rows: this.rowmobile ? this.rowmobile : 1,
              vertical: this.vertical ? this.vertical : true,
              verticalSwiping: this.verticalSwiping
                ? this.verticalSwiping
                : true,
            },
          },
        ],
      },
    }
  },
  props: {
    ['carouselData']: Array,
    ['slideShow']: Number,
    ['slideScroll']: Number,
    ['row']: Number,
    ['rowmobile']: Number,
    ['vertical']: Boolean,
    ['verticalSwiping']: Boolean,
  },
  mounted() {
    this.saveRoute()
  },
  methods: {
    saveRoute() {
      localStorage.setItem('routeEventCarousel', this.$root._route.path)
    },
    imageProps(img) {
      return { '--backgroundimage': `url(${img})` }
    },
  },
  computed: {},
}
</script>

<style scoped>
.slick-default > .slick-dots {
  display: flex !important;
  list-style: none;
  justify-content: center;
  margin-top: 2rem;
}
.slick-default > li {
  list-style-type: none;
  margin-right: 0.5rem;
}
.slick-dots > li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 40px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  border: 1px solid blue !important;
}
.slick-default > li > .custom-dot {
  height: 0.7em;
  width: 0.7em;
  border-radius: 0.7em;
  border: 1px solid #00a9e0;
  display: flex;
}
.slick-default > .slick-action ul {
  list-style-type: none;
}
.slick-default > .slick-action ul > li > .slick-active .custom-dot {
  background-color: #00a9e0;
  border: none;
}
.cardContainer {
  width: 97%;
  height: 300px;
  border-radius: 10px;
  margin: 1%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(105, 115, 111, 1) 93%
  );
  position: relative;
  color: #fff;
  cursor: pointer;
}
.cardContainer::before {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--backgroundimage) no-repeat;
  z-index: -1;
}
.text-small-grey {
  color: #dce6e1;
}
.Link:hover {
  text-decoration: none;
}
</style>
