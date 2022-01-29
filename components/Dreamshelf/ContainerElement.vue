<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h5>{{ Theme }}</h5>
      <router-link :to="to">
        <h5>{{ nameLink }}</h5>
      </router-link>
    </div>
    <div class="col-12 mb-5">
      <SharedCarouselPainting :row="1" :slideScroll="1" :slideShow="3">
        <div v-for="item in data" :key="item">
          <div class="card mb-3 card-container">
            <img :src="item.img" class="card-img-top img-fluid img" />
            <div class="card-body">
              <h5 class="card-title text-center">Card title</h5>
            </div>
          </div>
        </div>
      </SharedCarouselPainting>
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
.card-container {
  width: 90%;
}
</style>
