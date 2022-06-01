<template>
  <div class="container h-100 backgroundsecond">
    <div class="containerElementHero h-100" v-if="destaques.length > 0">
      <!--<div class="text-white containerDescription">
        <h4 class="text-white" >
          {{ destaques[destaques.length - 1].title }}
        </h4>
        <p>
          {{ destaques[destaques.length - 1].datapublicacao }} |
          {{ Date.parse(this.destaques[this.destaques.length - 1].data) }}
        </p>

        <p v-html="destaques[destaques.length - 1].description">
        </p>
        <div class="text-start">
          <SharedLinkMore name="Ver mais" colors="#E0DAD0" to="/dreamshelf" />
        </div>
      </div>-->
      <div class="card containerCard p-3">
        <div class="card-body">
          <div class="card-text">
            <h5>Destaques</h5>
            <hr />
            <div v-for="(item, i) in destaques.slice(0,4)" :key="i">
              <!--<nuxt-link class="Link" :to="`arts/${destaques[i].id}`">
                <SharedCardWidthImgLeft v-bind="item" />
              </nuxt-link>-->
               <SharedCardWidthImgLeft v-bind="item" />              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="containerElementHero h-100" v-else>
      <div class="text-white containerDescription">
        <h4 class="text-white">{{ lang.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['destaques']: Array ,
    // {
    //   type: 'Array',
    //   default: () => [],
    // },
    ['title']: String,
  },
  computed: {
     lang() {
      return {
        title: this.$t("noInformation.title"),
      }
      }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.backgroundsecond {
  z-index: 999;
}
.containerCard {
  background-color: rgba(209, 209, 205, 0.8);
  margin-top: 215px;
      position: absolute;
    right: 62px;
    height: 761px;
    width: 543px !IMPORTANT;
    z-index: 999;
  /* padding: 10% 3%; */
}
hr {
  border: 1px solid #636e6a;
}
.containerDescription {
  width: 75%;
  height: 100%;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 999;
}
.containerElementHero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .containerCard {
    display:none !important;
  }
  .containerDescription {
    width: 100%;
  }
  .containerElementHero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* align-items: flex-end !important; */
  }
}
</style>
