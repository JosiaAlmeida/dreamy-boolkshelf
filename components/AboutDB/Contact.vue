<template>
  <div class="container-fluid" id="about">
    <div class="row reverse">
      <div class="background">
        <div class="row">
          <div class="col-12">
            <p class="visible-mobile">
              {{lang.title}}
            </p>
          </div>
        </div>
      </div>
      <div class="container d-flex alignText">
        <div class="width-text">
          <p class="visible-width-100 mb-4 text-size-24">
            {{lang.title}}
          </p>
          <p class="Text-padding-mobile mb-4 text-size-24">
            {{lang.description}}
          </p>
          <p class="Text-padding-mobile mb-4 text-size-24">
            {{lang.description2}}
          </p>
          <div class="Text-padding-mobile mb-custom">
            <div class="contact">
              <div id="sizeIconPhone">
                <img src="/assets/mobile-phone.svg" alt="Icone de telefone" />
              </div>
              <p>+244 923 96 47 10</p>
            </div>
            <div class="contact mt-2">
              <div id="sizeIconEmail">
                <img
                  src="/assets/email.svg"
                  class="img-fluid sizeIcon"
                  alt="Icone de email"
                />
              </div>
              <p class="text-contact">informate@dreamybookshelf.com</p>
            </div>
            <div class="contact mb-5">
              <div id="sizeIconPin">
                <img
                  src="/assets/pin.svg"
                  alt="Icone de pin"
                  class="img-fluid sizeIcon"
                />
              </div>
              <p class="text-contact">
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
  computed: {   
    lang() {
      return {
        title: this.$t("about.title"),
        description: this.$t("about.description"),
        description2: this.$t("about.description2"),
      };
    },
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
  font-family: 'Nunito', 'Regular';
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
  align-items: center;
}
.width-text {
  width: 530px;
  height: 464px;
}
.contact {
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
}
.sizeIcon {
  font-size: 16px;
}
#sizeIconPhone {
  height: 12px !important;
}
p {
  font-size: 0.9rem;
}
.mb-custom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
@media only screen and (max-height: 700px) {
  .text-size-24 {
    font-size: 14px !important;
  }
  .alignText {
    align-items: flex-start;
  }
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
