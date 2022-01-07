<template>
  <div class="col-md-11 col-sm-12 mt-3">
    <VueSlickCarousel
      :responsive="['col-sm-12', 'col-md-4']"
      :autoplay="true"
      :rows="5"
      :slidesToShow="3"
      :arrows="false"
      :dots="true"
      :infinite="false"
      :adaptiveHeight="true"
    >
      <div v-for="(item, i) in carouselData" :key="i">
        <nuxt-link class="Link" :to="'event/'+i">
        <div
          class="cardContainer d-flex align-items-end p-4"
          :style="imageProps(item.img)"
        >
          <div class="w-75">
            <h5>{{item.title}}</h5>
            <small class="text-small-grey"> {{item.date}} </small>
          </div>
        </div>
        </nuxt-link>
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
  props:{
    ['carouselData']: Array
  },
  methods: {
    imageProps(img) {
      return { '--backgroundimage': `url(${img})` }
    },
  },
  computed: {},
}
</script>

<style scoped>
.cardContainer {
  width: 97%;
  height: 300px;
  border-radius: 10px;
  margin: 1%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(105, 115, 111, 0.9) 90%
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
.Link:hover{
  text-decoration: none;
}
</style>
