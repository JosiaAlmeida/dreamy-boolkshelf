<template>
  <div class="card mb-3 text-left">
    <div class="row g-0">
      <div class="col-6">
        <img
          :src="`${ImgComputed}`"
          class="img-fluid img rounded-start"
          :alt="`${description}`"
        />
      </div>
      <div class="card-body col-6 marginTopNegative">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
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
  height: 99px;
  width: 100%;
}
.card {
  height: 100px;
}
.card-body {
  height: 90px;
}
.marginTopNegative {
  margin-top: -10px;
}
</style>
