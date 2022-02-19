<template>
  <div class="mb-3 card-container">
    <div style="box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" v-if="item">
      <nuxt-link class="Link" :to="'arts/' + item.id">
        <img
          v-if="item.images && item.images.length"
          :src="item.images[0].url"
          class="card-img-top img-fluid img"
        />
        <img
          v-else
          src="/assets/img/armario.jpg"
          class="card-img-top img-fluid img"
          alt=""
        />
        <div class="p-3">
          <h5 class="card-title text-center">{{ item.title }}</h5>
          <hr />
          <small>09 Agosto 21</small>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['item']: Object,
  },
}
</script>

<style scoped>
.card {
  width: 250px;
  /* height: 300px; */
}
.img {
  height: 310px;
}
.Link:hover {
  text-decoration: none;
}
.Link {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
</style>
