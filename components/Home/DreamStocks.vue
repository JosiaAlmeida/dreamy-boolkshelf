<template>
  <div class="background">
    <HomePartialDreamShelf :destaques="destaques" />

    <SharedLinkMore to="/dreamshelf" name="Ver Todas" colors="#646F65" />
  </div>
</template>

<script>
export default {
  props: {
    ['destaques']: Array,
  },
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  padding: 15% 10% 5% 10%;
  background-color: #dcdccb;
  margin-top: -245px;
}
@media screen and (max-width: 600px) {
  .background {
    padding: 5%;
    margin-top: -100px;
  }
}
</style>
