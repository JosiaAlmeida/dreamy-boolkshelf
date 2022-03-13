<template>
  <SharedModal :showPaint="showPaint" v-if="showPaint" @close="!showPaint">
    <div class="container">
      <div class="row justify-content-center mt-5 heigth-100-vh">
        <div class="col-12 w-100 text-right">
          <button
            @click="openModal()"
            class="btn btn-default btn-close text-white"
          >
            Fechar
          </button>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-around align-items-center w-100">
            <button
              type="button"
              class="zIndex btn btn-default"
              @click="$refs.carouselRoomArts.prev()"
            >
              <i class="fas fa-arrow-left" style="color: #fff0de"></i>
            </button>
            <VueSlickCarousel
              v-if="Data.length"
              class="w-75"
              ref="carouselRoomArts"
              v-bind="options"
            >
              <div v-for="(item, i) in getImages" :key="i">
                <div class="row justify-content-center align-items-center">
                  <div class="col-5 mt-5">
                    <img :src="item" class="img-fluid img" alt="" />
                  </div>
                  <div class="ml-4 col-5 separator2 d-flex">
                    <!-- <div class="separator"></div> -->
                    <!-- <hr class="separator" /> -->
                    <div class="p-4 text-white">
                      <p>{{ getDescription[i] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
            <button
              class="zIndex btn btn-default"
              type="button"
              @click="$refs.carouselRoomArts.next()"
            >
              <i class="fas fa-arrow-right" style="color: #fff0de"></i>
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
    ['openModal']: Function,
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
  computed: {
    getImages() {
      const item = this.Data.map((item) => item.images)
      let allImage = []
      for (let i = 0, length = item.length; i < length; i += 1) {
        const element = item[i]
        for (let j = 0, length = element.length; j < length; j += 1) {
          // const element2 = element[j];
          allImage.push(element[j])
        }
      }
      return allImage
    },
    getDescription() {
      return this.Data.map((item) => item.description)
    },
  },
  mounted() {
    console.log('Data', this.getDescription)
  },
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
  /* border-bottom: 1px solid #fff0de; */
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
</style>
