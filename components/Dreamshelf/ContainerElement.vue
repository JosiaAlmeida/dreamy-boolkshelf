<template>
  <div :class="navContainer && 'nav-container'">
    <div
      class="d-flex justify-content-between my-3"
      :class="!navContainer && 'nav-container'"
    >
      <h5>{{ Theme }}</h5>
      <nuxt-link
        class="Link"
        v-if="datas && datas.length > 4"
        :to="`arts/${datas[0].identificador}/all`"
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
      :carouselQtd="datas.length"
      :arrowsShow="datas.length > 4 ? true : false"
      v-if="datas && datas.length"
    >
      <div
        v-for="(item, idx) in datas"
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
    ['datas']: Array,
    ['url']: String,
    ['navContainer']: Boolean,
  },
  data() {
    return {
      identificador: 0,
    }
  },
  mounted() {},
}
</script>
<style scoped>
.cardcontainer {
  max-width: 372px;
}
</style>
