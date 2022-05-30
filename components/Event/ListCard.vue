<template>
  <div class="d-flex flex-wrap justify-content-center">
    <nuxt-link
      class="Link p-3"
      :to="'event/' + item.id"
      v-for="(item, i) in carouselData"
      :key="i"
    >
      <div
        class="cardContainer d-flex align-items-end p-4"
        :style="imageProps(item.images[0].url)"
      >
        <div class="w-100">
          <h6 class="text-white">{{ item.title }}</h6>
          <small class="text-small-grey">
            {{ getDate(item.date) }}
          </small>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesToShow: this.slideShow ? this.slideShow : 3,
        infinite: true,
        speed: 500,
        slidesToScroll: this.slideScroll ? this.slideScroll : 3,
        dots: true,
        rows: this.row ? 1 : 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              rows: this.rowmobile ? this.rowmobile : 2,
              vertical: this.vertical ? this.vertical : false,
              verticalSwiping: this.verticalSwiping
                ? this.verticalSwiping
                : false,
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
      window.localStorage.setItem('routeEventCarousel', this.$root._route.path)
    },
    imageProps(img) {
      return { '--backgroundimage': `url(${img})` }
    },
    getDate(item) {
      const date = new Date(item)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
  },
  computed: {},
}
</script>

<style scoped>
.cardContainer {
  width: 564px !important;
  height: 491px;
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
  width: 100% !important;
  height: 100%;
  border-radius: 10px;
  background: var(--backgroundimage) no-repeat;
  background-size: cover;
  z-index: -1;
}
.text-small-grey {
  color: #dce6e1;
}
.Link:hover {
  text-decoration: none;
}
@media (max-width: 600px) {
  .cardContainer {
    width: 326px !important;
  }
  .slick-track {
    height: auto !important;
  }
}
</style>
