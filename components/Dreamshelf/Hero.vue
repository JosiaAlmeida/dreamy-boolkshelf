<template>
  <div class="container h-100 backgroundsecond">
    <div class="containerElementHero h-100" v-if="destaques.length > 0">
      <div class="card containerCard p-3">
        <div class="card-body">
          <div class="card-text">
            <h5>Destaques</h5>
            <hr />
            <div
              id="card-scroll"
              v-for="(item, i) in destaques.slice(0, 4)"
              :key="i"
            >
              <SharedCardWidthImgLeft v-bind="item" />
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
    ['destaques']: Array,
    ['title']: String,
  },
  computed: {},
  mounted() {},
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
  width: 543px !important;
  z-index: 999;
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
.card-scroll {
  overflow-y: scroll;
}
@media all and (min-width: 700px) and (max-width: 1380px) {
  .containerCard {
    margin-top: calc(215px / 2);
    height: calc(761px / 2) !important;
  }
}
@media screen and (max-width: 600px) {
  .containerCard {
    display: none !important;
  }
  .containerDescription {
    width: 100%;
  }
  .containerElementHero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
