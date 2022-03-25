<template>
  <SharedModal :showPaint="showPaint" v-if="showPaint" @close="!showPaint">
    <div class="container">
      <div class="row justify-content-center mt-5 heigth-100-vh">
        <div class="col-12 w-100 text-right">
          <button
            @click="closeModal()"
            class="btn btn-default btn-close text-white"
          >
            Fechar
          </button>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-around align-items-center w-100">
            <button
              type="button"
              class="zIndex btn-default"
              @click="$refs.carouselRoomArts.prev()"
            >
              <img
                src="/assets/img/left-arrow.svg"
                class="img-fluid logo"
                alt="Logo da dreamy"
              />
            </button>
            <VueSlickCarousel
              v-if="Data.length"
              class="w-75"
              ref="carouselRoomArts"
              v-bind="options"
            >
              <div v-for="(item, i) in Data" :key="i">
                <div class="row justify-content-center align-items-center">
                  <div class="col-5 mt-5 img-top">
                    <img :src="item.url" class="img-fluid img" alt="" />
                  </div>
                  <div class="ml-4 col-5 separator2 d-flex">
                    <div class="p-4 text-white">
                      <p>{{ description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
            <button
              class="zIndex btn-default"
              type="button"
              @click="$refs.carouselRoomArts.next()"
            >
              <img
                src="/assets/img/right-arrow.svg"
                class="img-fluid logo"
                alt="Logo da dreamy"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </SharedModal>
</template>

<script>
export default {
  props: {
    ['showPaint']: Boolean,
    ['closeModal']: Function,
    ['Data']: Array,
    ['description']: String,
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      options: {
        infinite: true,
        speed: 500,
        dots: true,
        dotsClass: 'slick-dots ',
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: true,
        pauseOnHover: false,
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
  computed: {},
  mounted() {},
  destroyed() {},
}
</script>

<style scoped>
.heigth-100-vh {
  /* height: 100vh; */
  align-items: center;
}
.btn-close {
  border-bottom: 1px solid #fff0de;
}
button {
  color: #fff0de !important;
  outline: none !important;
  /* border-bottom: 1px solid #fff0de; */
}

button:focus-visible {
  outline: none !important;
}

.img {
  width: 350px;
  height: 400px;
}
.separator2 {
  border-left: 1px solid #fff0de;
}
.separator {
  height: 200px;
  transform: rotate(180deg);
  width: 0.1px !important;
  /* border: 0.2px solid #fff0de; */
}

hr {
  /* height: 100%; */
  transform: rotate(90deg);
  color: white;
  background-color: white;
  /* margin-left: -500px; */
}

.zIndex {
  z-index: 1;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.slick-arrow {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 45%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev {
  left: 150px;
  z-index: 10;
}

.slick-prev::before {
  content: '';
  display: inline-block;
  width: 36px;
  height: 36px;
  border-left: 8px solid rgba(0, 0, 0, 0.5);
  border-bottom: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}

.slick-prev:focus::before,
.slick-prev:hover::before {
  border-left: 8px solid rgba(0, 0, 0, 0.8);
  border-bottom: 8px solid rgba(0, 0, 0, 0.8);
}

.slick-next {
  right: 150px;
  z-index: 10;
}

.slick-next::before {
  content: '';
  display: inline-block;
  width: 36px;
  height: 36px;
  border-top: 8px solid rgba(0, 0, 0, 0.5);
  border-right: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}

.slick-next:focus::before,
.slick-next:hover::before {
  border-top: 8px solid rgba(0, 0, 0, 0.8);
  border-right: 8px solid rgba(0, 0, 0, 0.8);
}
@media(max-width: 600px){
  .img{
    height:400px;
    width:70%
  }
  .row{
    flex-flow: column;
  }
  .separator2{
    border-left: none;        
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
  .img-top{
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
}
</style>
