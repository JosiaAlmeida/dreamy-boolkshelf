<template>
  <div>
    <div class="w-100 mb-2 d-flex justify-content-center">
      <a @click.prevent="scrollTop" href="#">Subir</a>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="container text-white">
            <div class="row">
              <div class="col-6 pt-5 pl-5">
                <div class="row pl-5 pr-5">
                  <div class="col-4">
                    <img
                      src="/assets/img/armariofundo.jpg"
                      class="img img-fluid"
                      alt="icone da dreamy-boolkshelf"
                    />
                  </div>
                  <div class="col-8">
                    <ul class="text-footer-color">
                      <li>Home</li>
                      <li class="mt-2">Art Room</li>
                      <li class="mt-2">A estante dos Sonhos</li>
                      <li class="mt-2">Dreamy Club</li>
                      <li class="mt-2">Sobre nós</li>
                      <li class="mt-2">Notícias</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-center text-footer-color">
          <small>Dreamy Bookshelf 2021 All Rights</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.container-fluid {
  background-color: #1e3029;
}
hr {
  background-color: #697b74;
}
.img {
  widows: 100px;
  height: 100px;
}
.text-footer-color {
  color: #f1e4d3;
}
</style>
