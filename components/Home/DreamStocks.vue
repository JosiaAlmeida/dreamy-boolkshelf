<template>
  <div class="background">
    <HomePartialDreamShelf />

    <SharedLinkMore to="/" name="Ver Todas" colors="#646F65" />
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  padding: 15% 10% 5% 10%;
  background-color: #dcdccb;
  margin-top: -25%;
}
@media screen and (max-width: 600px) {
  .background {
    padding: 5%;
  }
}
</style>
