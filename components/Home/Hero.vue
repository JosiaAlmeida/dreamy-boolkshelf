<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-white background p-5">
        <div>
          <h1 class="text-padding text-white">Dreamy Bookshelf</h1>
          <p class="text-padding w-75">
            Sonhe, visualize e monte connosco a estante dos teus sonhos
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
  height: 100vh !important;
  width: 100%;
  position: relative;
}
.background::before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/armario.jpg') no-repeat;
  background-size: cover;
  z-index: -1;
  filter: brightness(0.4) saturate(0.5);
}
.col-12 {
  height: 100vh;
  display: flex;
  align-items: center;
}
.text-padding {
  padding: 0% 5% 0% 5%;
  color: #b5bab9;
}
@media only screen and (max-width: 600px) {
  .col-12 {
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
  .text-padding {
    padding: 0%;
  }
}
</style>
