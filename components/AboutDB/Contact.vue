<template>
  <div class="container-fluid background">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-11 p-5 d-flex alignText align-items-center">
        <div class="w-50 text-danger">
          <p>
            O Dreamy Booshelf é um espaço para amantes de livros e fotografias.
          </p>
          <p>
            Num país, onde o acesso a leitura diversificada vem se tornando um
            desafio, apostar em plataformas digitais foi uma maneira de mostrar
            que todos podemos ter acesso a leitura de nossos gostos independente
            dos generos literários, que ler pode e deveria ser um prazer mais do
            que obrigação e/ou nos fazer parecer mais cultos que os outros.
          </p>
          <p>
            O Dreamy Booshelf vem juntar em um canto todos os amantes de livros
            e partilhar tudo que existe no mundo literário e explorar o universo
            de fotografias.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.background {
  height: 100vh;
  position: relative;
  align-items: flex-end;
  text-align: end;
}
.background::before {
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: url('/assets/img/armario.jpg') no-repeat center center;
  background-size: cover;
  z-index: -1;
}
.alignText {
  height: 100vh;
}
</style>
