<template>
  <div>
    <SharedNavbar />
    <HomeHero />
    <HomeWhatDreamy />
    <HomeDreamStocks />
    <RoomartTitleDescription />
    <SharedLinkMore colors="#28493C" name="Ver Galeria" to="/roomart" />
    <SharedCarouselPainting :slideShow="4" :slideScroll="4" :row="1">
      <div class="pt-4 pb-4" v-for="i in 16" :key="i">
        <div
          :style="RotateRandom(Math.floor(Math.random() * -20) + 15)"
          class="paint"
        ></div>
      </div>
    </SharedCarouselPainting>
    <HomePartialTitleEvents />
  </div>
</template>

<script>
export default {
  methods: {
    RotateRandom(v) {
      return { '--rotate': `rotate(${v}deg)` }
    },
  },
}
</script>
<style scoped>
.paint {
  border: 20px solid #333333;
  height: 350px !important;
  width: 290px !important;
  -ms-transform: var(--rotate); /* IE 9 */
  -webkit-transform: var(--rotate); /* Safari */
  transform: var(--rotate);
  position: inherit;
  cursor: pointer;
}
.paint::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/armario.jpg') no-repeat;
  z-index: -1;
  background-size: cover;
}
.img {
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .paint {
    height: 200px !important;
    width: 150px !important;
  }
}
</style>
