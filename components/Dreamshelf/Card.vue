<template>
  <div class="mb-3 card-container">
    <img :src="img" class="card-img-top img-fluid img" />
    <div class="mt-1">
      <h5 class="card-title text-center">Card title</h5>
      <hr />
      <small>09 Agosto 21</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['img']: String,
  },
}
</script>


<style scoped>
.card {
  width: 250px;
  /* height: 300px; */
}
.img {
  height: 250px;
}
</style>
