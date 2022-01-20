<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="container text-white">
            <div class="row">
              <div class="col-md-6 col-sm-12 pt-5 pl-5">
                <div class="row pl-5 pr-5">
                  <div class="col-md-4 col-sm-12">
                    <img
                      src="/assets/img/armariofundo.jpg"
                      class="img img-fluid"
                      alt="icone da dreamy-boolkshelf"
                    />
                  </div>
                  <div class="col-md-8 col-sm-12">
                    <div class="row">
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>Home</p>
                      </div>
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>Art Room</p>
                      </div>
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>A estante dos Sonhos</p>
                      </div>
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>Dreamy Club</p>
                      </div>
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>Sobre nós</p>
                      </div>
                      <div class="col-12 d-flex">
                        <img
                          src="/assets/img/Caminho 636.svg"
                          class="img-fluid imgLogo"
                          alt="pena"
                        />
                        <p>Notícias</p>
                      </div>
                    </div>
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
  width: 100px;
  height: 100px;
}
.imgLogo {
  width: 20px;
  height: 20px;
}
.text-footer-color {
  color: #f1e4d3;
}
</style>
