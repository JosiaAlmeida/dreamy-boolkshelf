<template>
  <div class="card mb-3 text-left">
    <div class="row g-0">
      <div class="col-5">
        <img
          :src="`${ImgComputed}`"
          class="img-fluid img rounded-start"
          :alt="`${description}`"
        />
      </div>
      <div class="col-7">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ['img']: String,
    ['description']: String,
    ['date']: String,
  },
  computed: {
    ImgComputed() {
      return `/assets/img/${this.img}`
    },
  },
}
</script>

<style scoped>
.img {
  height: 100%;
  width: 100%;
}
</style>
