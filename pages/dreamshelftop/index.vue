<template>
  <div class="container">
    <div class="row">
      <div class="col-12 LinkContent mt-4 mb-4">
        <nuxt-link to="/dreamshelf" class="Link">{{lan.title}}</nuxt-link>
      </div>
      <div v-for="i in 20" class="col-3" :key="i"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
       lang() {
      return {
        title: this.$t("close.title"),
      };
    },
  }
}
</script>

<style scoped>
p {
  font-size: 0.8rem;
  text-align: start;
}
.img {
  width: 100%;
  height: 500px;
  position: relative;
  /* background-color: red; */
}
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 7px !important;
  background: url('/assets/img/armario.jpg') no-repeat;
  background-size: cover;
}
.LinkContent {
  padding: 1%;
}
.Link {
  color: #28493c;
  font-weight: 600;
  font-size: 20px;
  margin-left: -1%;
  border-bottom: 1px solid #000;
}
.Link:hover {
  text-decoration: none;
}
.text-white-title {
  color: #636e6a !important;
  font-weight: bold;
}
.text-small-grey {
  color: #bcbcbc;
}
@media only screen and (max-width: 600px) {
  .img {
    height: 300px;
  }
  .img::before {
    border-radius: 0px !important;
  }
  .LinkContent {
    width: 100%;
    text-align: right !important;
  }
}
</style>

