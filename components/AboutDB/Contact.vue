<template>
  <div class="container-fluid">
    <div class="row reverse">
      <div class="background">
        <div class="row">
          <div class="col-12">
            <p class="visible-mobile">
              O Dreamy Booshelf é um espaço para amantes de livros e
              fotografias.
            </p>
          </div>
        </div>
      </div>
      <div class="col-11 d-flex alignText align-items-center">
        <div class="width-text">
          <p class="visible-width-100">
            O Dreamy Booshelf é um espaço para amantes de livros e fotografias.
          </p>
          <p class="Text-padding-mobile">
            Num país, onde o acesso a leitura diversificada vem se tornando um
            desafio, apostar em plataformas digitais foi uma maneira de mostrar
            que todos podemos ter acesso a leitura de nossos gostos independente
            dos generos literários, que ler pode e deveria ser um prazer mais do
            que obrigação e/ou nos fazer parecer mais cultos que os outros.
          </p>
          <p class="Text-padding-mobile">
            O Dreamy Booshelf vem juntar em um canto todos os amantes de livros
            e partilhar tudo que existe no mundo literário e explorar o universo
            de fotografias.
          </p>
          <div class="Text-padding-mobile">
            <div class="contact">
              <i class="fas fa-mobile-alt sizeIcon mt-2"></i>
              <p class="mt-3">+244 923 96 47 10</p>
            </div>
            <div class="contact">
              <i class="far fa-envelope sizeIcon mt-2"></i>
              <p class="mt-2">informate@dreamybookshelf.com</p>
            </div>
            <div class="contact">
              <i class="fas fa-map-marker-alt sizeIcon mt-4"></i>
              <p class="mt-3">
                Avenida da Liberdade n23 <br />
                Luanda - Angola
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1 col-sm-12 mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.reverse {
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100vh;
}
.visible-mobile {
  visibility: hidden;
}
.background {
  display: flex;
  align-items: center;
  padding: 4%;
  z-index: -1;
}
.background::before {
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: url('/assets/img/womenPaint.jpg') no-repeat center center;
  background-size: cover;
}
.alignText {
  height: 100vh;
  padding: 5%;
}
.width-text {
  width: 50%;
}
.contact {
  display: flex;
  column-gap: 1rem;
}
.sizeIcon {
  font-size: 30px;
}
@media only screen and (max-width: 600px) {
  .reverse {
    display: inline-block;
    flex-direction: column;
  }
  .background {
    display: flex;
    align-items: flex-end;
    padding: 4%;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 50vh;
  }
  .width-text {
    width: 100%;
    text-align: left;
  }
  .alignText {
    widows: 100%;
    justify-content: center !important;
    padding: 3%;
  }
  .top {
    margin-top: -5% !important;
  }
  .container-text-mobile {
    padding: 5%;
  }
  .visible-mobile {
    visibility: visible;
    width: 75%;
    padding: 5%;
  }
  .visible-width-100 {
    visibility: hidden;
  }
  .Text-padding-mobile {
    padding: 0% 4%;
  }
}
</style>
