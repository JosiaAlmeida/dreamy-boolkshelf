<template>
  <div class="container-fluid background">
    <div class="row">
      <div class="col-12 flexContainer text-white background2 p-5">
        <div>
          <h1 class="text-padding text-white">Dreamy Bookshelf</h1>
          <p class="text-padding w-75">
            Sonhe, visualize e monte connosco a estante dos teus sonhos
          </p>
        </div>
      </div>
      <div class="col-12 imgpena text-center">
        <img src="/assets/img/Caminho 636.svg" class="img-fluid" alt="pena" />
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
.background2::before {
  content: '';
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/shutterstock_1919540552.png') center right
    no-repeat;
  background-size: 100% 100%;
  z-index: -1;
  filter: brightness(0.5);
}
.background2 {
  height: 100vh !important;
  width: 100%;
  position: relative;
  background-color: rgba(99, 110, 106, 0.5);
}
.imgpena {
  margin-top: -6%;
}
/* .background2::before {
  content: '';
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('/assets/img/shutterstock_1919540552-2.png') center right
    no-repeat;
  background-size: cover;
  z-index: -1;
} */
.flexContainer {
  height: 100vh;
  display: flex;
  align-items: center;
}
.text-padding {
  padding: 0% 5% 0% 5%;
  color: #b5bab9;
}
@media only screen and (max-width: 600px) {
  .flexContainer {
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
  .text-padding {
    padding: 0%;
  }
  .imgpena {
    margin-top: -16% !important;
    height: 30px;
  }
  .img-fluid {
    height: 50px;
  }
}
</style>
