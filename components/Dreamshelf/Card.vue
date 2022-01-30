<template>
  <div class="card mb-3 card-container">
    <img :src="img" class="card-img-top img-fluid img" />
    <div class="card-body">
      <h5 class="card-title text-center">Card title</h5>
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
  width: 98%;
}
</style>
