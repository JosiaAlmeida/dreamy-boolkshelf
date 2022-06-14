<template>
  <div class="card mb-3 text-left">
    <div class="row g-0">
      <div class="col-6">
        <img
          :src="`${images[0].url}`"
          class="img-fluid img rounded-start"
          :alt="`${images.slug}`"
        />
      </div>
      <div class="card-body col-6 marginTopNegative">
        <h5 class="card-title">{{ title != null ? title.substring(0, 35)+'...' : ''}}</h5>
        <p class="card-text">
          <small class="text-muted">{{ datapublicacao }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ['images']: Array,
    ['title']: String,
    ['datapublicacao']: String,
  },
  computed: {},
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
.card-title {
  color: #636e6a;
  font-size: 15px;
}
@media all and (min-width: 700px) and (max-width: 1380px) {
  .card {
    height: calc(100px * 0.8);
  }
  .card-body {
    height: calc(90px * 0.8);
  }
  .img {
    height: calc(99px * 0.8);
    /* width: calc(100% / 2); */
  }
}
</style>
