<template>
  <div class="mb-3 card-container">
    <div style="box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" v-if="item">
      <nuxt-link class="Link" :to="`arts/${item.id}`">
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
          <h5 class="card-title text-center">
            {{ item.title != null ? item.title.substring(0, 25)+'...' : '' }}
          </h5>
          <hr />
          <small> {{ getDate }} </small>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['item']: Object,
    propsurl: {
      type: String,
      default: 'impressoes',
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.item.date)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
  },
}
</script>

<style scoped>
.card {
  width: 250px;
  /* height: 300px; */
}
.img {
  height: 270px;
  object-fit: cover;
}
.Link:hover {
  text-decoration: none;
}
.Link {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
</style>
