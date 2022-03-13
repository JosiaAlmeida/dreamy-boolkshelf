<template>
  <div class="">
    <div class="nav-container">
      <div class="d-flex justify-content-between">
        <h5>{{ Theme }}</h5>
        <router-link v-if="data && data.length > 5" :to="to">
          <h5>{{ nameLink }}</h5>
        </router-link>
      </div>
      <div class="row">
        <div class="col-12 text-center mb-5">
          <SharedCarouselPainting
            class="w-auto"
            :row="1"
            :slideScroll="1"
            :slideShow="4"
            :slideScrollMobile="1"
            v-if="data && data.length"
          >
            <div v-for="(item, idx) in data" :key="idx" class="pl-2 pr-2 cardcontainer">
              <DreamshelfCard :item="item" :propsurl="url" />
            </div>
          </SharedCarouselPainting>
        </div>
      </div>
    </div>
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
  },
}
</script>
<style scoped>
.cardcontainer {
  max-width: 372px;
}
</style>
