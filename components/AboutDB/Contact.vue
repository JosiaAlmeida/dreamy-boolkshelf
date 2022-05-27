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
      <div class="container d-flex alignText align-items-start">
        <div class="width-text">
          <p class="visible-width-100 mb-4 text-size-24">
            O Dreamy Booshelf é um espaço para amantes de livros e fotografias.
          </p>
          <p class="Text-padding-mobile mb-4 text-size-24">
            Num país, onde o acesso a leitura diversificada vem se tornando um
            desafio, apostar em plataformas digitais foi uma maneira de mostrar
            que todos podemos ter acesso a leitura de nossos gostos independente
            dos generos literários, que ler pode e deveria ser um prazer mais do
            que obrigação e/ou nos fazer parecer mais cultos que os outros.
          </p>
          <p class="Text-padding-mobile mb-4 text-size-24">
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
            <div class="contact mb-5">
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
import query from '~/graphQL/sobre.gql'
export default {
  data() {
    return {
      src: '',
    }
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getByData()
      },
      deep: true,
    },
  },
  created() {
    this.getByData()
  },
  methods: {
    getByData() {
      this.$apollo
        .query({
          query: query,
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          let res = this.$flattenData(
            response.data.queryDestaqueContents,
            'data'
          )
          this.src = res[0].src
          console.log(this.src)
        })
        .catch((error) => error)
    },
  },
}
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
.text-size-24 {
  font-size: 18px;
  font-family: Nunito, Regular;
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
  background: url('/assets/img/SObre nos 02@2x.png') no-repeat center center;
  background-size: cover;
}
.alignText {
  height: 100%;
  padding: 5%;
}
.width-text {
  width: 530px;
  height: 464px;
}
.contact {
  display: flex;
  column-gap: 1rem;
}
.sizeIcon {
  font-size: 30px;
}
p {
  font-size: 0.9rem;
}
@media only screen and (max-width: 600px) {
  .reverse {
    display: inline-block;
    flex-direction: column;
    height: 100%;
    width: 100vw;
  }
  .background {
    display: flex;
    align-items: flex-end;
    padding: 4%;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .width-text {
    width: 100%;
    text-align: left;
  }
  .alignText {
    width: 100%;
    justify-content: center !important;
    padding: 3%;
    margin-bottom: 220px;
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
