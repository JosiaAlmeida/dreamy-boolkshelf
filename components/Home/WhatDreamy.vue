<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="row flex-wrap">
          <div class="col-6 mt-3">
            <img
              src="/assets/img/shutterstock_1762598804_02.png"
              class="img-fluid mt-5 img"
              alt=""
            />
          </div>
          <div class="col-6">
            <img
              src="/assets/img/shutterstock_1227558304.png"
              class="img-fluid img"
              alt=""
            />
          </div>
          <div class="margin-negative-top2 col-6">
            <img
              src="/assets/img/shutterstock_1919540552-2.png"
              class="img-fluid mt-5 img img-mobile-ocult img-mt-5"
              alt=""
            />
          </div>
          <div class="margin-negative-top col-6">
            <img
              src="/assets/img/shutterstock_732217162.png"
              class="img-fluid img img-mobile-ocult"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 text-styles">
        <div class="text-content-style">
          <h3 class="title">Porquê a Dreamy Bookshelf</h3>
          <p>
            Porque o sonho de qualquer leitor é ter em seu domínio um espaço
            dedicado aos livros e a leitura, mas sabes por onde começar montar a
            sua estante? Onde e como comprar os teus livros favoritos? Sabes
            sobre a origem dos livros que lês ou mesmo que muitos dos filmes que
            assistes são baseados em livros clássicos e populares?
          </p>
          <p>
            O DREAMY BOOLKSHELF, está aqui para ajudar-te a adquirir os livros
            que mais desejas, a construir a tua biblioteca particular e
            inteirar-te sobre tudo o uqe se passa no mundo da literatura
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  padding: 4%;
}
.img {
  height: 300px;
  width: 100% !important;
}
.text-styles {
  padding: 5%;
  display: flex;
  align-items: center;
}
.text-content-style {
  color: #5d707a;
}

.margin-negative-top {
  margin-top: -7%;
}
.margin-negative-top2 {
  margin-top: -4%;
}
h3 {
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .img-mobile-ocult {
    display:none;
  }
  .img-visible-mobile {
    visibility: visible;
    height: 300px !important;
  }
  .img{
    height: 210px !important;
  }
  .text-content-style{
    text-align: center;
  }
  .title{
    max-width: 330px;
  }

}
</style>
