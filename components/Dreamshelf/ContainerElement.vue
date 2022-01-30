<template>
  <div class="row">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h5>{{ Theme }}</h5>
        <router-link :to="to">
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
          >
            <div v-for="item in data" :key="item" class="cardcontainer">
              <DreamshelfCard :img="item.img" />
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
  },
}
</script>
<style scoped>
.cardcontainer {
  width: 250px !important;
}
</style>
