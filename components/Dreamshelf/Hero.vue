<template>
  <div class="container h-100 backgroundsecond">
    <div class="containerElementHero h-100" v-if="destaques.length > 0">
      <div class="text-white containerDescription">
        <h4 class="text-white">
          {{ destaques[destaques.length - 1].title }}
        </h4>
        <p>
          {{ destaques[destaques.length - 1].datapublicacao }} |
          {{ Date.parse(this.destaques[this.destaques.length - 1].data) }}
        </p>
        <p>
          {{ destaques[destaques.length - 1].content }}
        </p>
        <div class="text-start">
          <SharedLinkMore name="Ver mais" colors="#E0DAD0" to="/dreamshelf" />
        </div>
      </div>
      <div class="card containerCard p-3">
        <div class="card-body">
          <div class="card-text">
            <h5>Destaques</h5>
            <hr />
            <div v-for="i in 4" :key="i">
              <SharedCardWidthImgLeft v-bind="destaques" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="containerElementHero h-100" v-else>
      <div class="text-white containerDescription">
        <h4 class="text-white">Nenhuma informação</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destaques: {
      type: 'Array',
      default: () => [],
    },
    ['title']: String,
  },
  computed: {},
}
</script>

<style scoped>
.backgroundsecond {
  z-index: 10;
}
.containerCard {
  background-color: rgba(209, 209, 205, 0.8);
  margin-top: 200px;
  height: auto;
  width: 350px !important;
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
}
.containerElementHero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .containerCard {
    width: 0px !important;
    overflow: hidden;
    height: 0px !important;
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
