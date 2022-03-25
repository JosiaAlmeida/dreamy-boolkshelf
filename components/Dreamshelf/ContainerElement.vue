<template>
  <div :class="navContainer && 'nav-container'">
    <div
      class="d-flex justify-content-between my-3"
      :class="!navContainer && 'nav-container'"
    >
      <h5>{{ Theme }}</h5>
      <nuxt-link
        class="Link"
        v-if="data && data.length > 4"
        :to="`arts/:${url}/all`"
      >
        <h5>{{ nameLink }}</h5>
      </nuxt-link>
    </div>
    <!-- <div class="row">
        <div class="col-12 text-center mb-5"> -->
    <SharedCarouselPainting
      class="w-auto"
      :row="1"
      :slideScroll="1"
      :slideShow="4"
      :slideScrollMobile="1"
      :carouselQtd="data.length"
      :arrowsShow="data.length > 4 ? true : false "
      v-if="data && data.length"
    >
      <div
        v-for="(item, idx) in data"
        :key="idx"
        class="pl-2 pr-2 cardcontainer"
      >
        <DreamshelfCard :item="item" :propsurl="url" />
      </div>
    </SharedCarouselPainting>
    <!-- </div>
      </div> -->
  </div>
</template>
<script>
export default {
  props: {
    ['nameLink']: String,
    ['Theme']: String,
    ['to']: String,
    ['data']: Array,
    ['url']: String,
    ['navContainer']: Boolean,
  },
}
</script>
<style scoped>
.cardcontainer {
  max-width: 372px;
}
</style>
