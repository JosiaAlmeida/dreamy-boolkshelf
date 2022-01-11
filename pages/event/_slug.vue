<template>
  <div class="container">
    <div class="row">
      <div class="col-12 LinkContent mt-4 mb-4">
        <nuxt-link :to="routes" class="Link">Fechar</nuxt-link>
      </div>
      <div class="mt-2 col-md-7 img col-sm-12">
        <!-- <img src="/assets/img/armario.jpg" alt="" class="img-fluid" /> -->
      </div>
      <!-- <div class="col-md-1"></div> -->
      <div class="col-md-5 mt-2 pl-5 w-100 col-sm-12">
        <h3 class="text-white-title">
          Feira dos livos gigantesca no consulado português em Angola
          {{ this.slug }}
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap
        </p>
      </div>
      <div class="col-md-7 mt-5 mb-5 d-flex justify-content-between">
        <small class="text-small-grey">10 de Agosto 2021</small>
        <small class="text-small-grey">Partilhar </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  data() {
    return {
      routes: null,
    }
  },
  created() {
    if (localStorage.getItem('routeEventCarousel'))
      this.routes = localStorage.getItem('routeEventCarousel')
  },
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

