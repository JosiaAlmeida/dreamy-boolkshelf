<template>
  <div class="col-12 mt-3">
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
      <div v-for="(img,i) in images" :key="i">
        <div class="cardContainer d-flex align-items-end p-4" :style="imageProps(img)">
          <div class="w-75">
            <h6>Feira dos livos gigantesca no consulado português em Angola</h6>
            <small class="text-small-grey">09 Agosto 21</small>
          </div>
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
  data() {
    return {
      images: [
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
        "/assets/img/armario.jpg",
      ]
    }
  },
  methods:{
    imageProps(img){
      return {'--backgroundimage': `url(${img})`}
    },
  },
  computed: {
    ColorBack(){
      return {'--red-color': 'red'}
    }
  }
}
</script>

<style scoped>
.cardContainer {
  width: 97%;
  height: 300px;
  border-radius: 10px;
  margin: 1%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(99,110,106,0.8) 85%);
  position: relative;
  color: #fff;
}
.cardContainer::before{
  content:'';
  top:0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--backgroundimage)no-repeat;
  z-index: -1;
}
.text-small-grey {
  color: #dce6e1;
}
</style>
