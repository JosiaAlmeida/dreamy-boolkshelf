<template>
  <div class="container-fluid background">
    <div class="row">
      <div
        class="col-12 p-5 d-flex align-items-end align-content-end text-white"
      >
        <h1 class="w-50 text-white mobile-qr">
          Estamos a criar algo especial para ti, até já!
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  height: 100vh;
  background-color: rgba(94, 106, 91, 0.5);
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
  background: url('/assets/img/shutterstock_1708821736.png') no-repeat center
    center;
  background-size: cover;
  filter: brightness(0.9) grayscale(0.5);
  z-index: -1;
}
.col-12 {
  height: 100vh;
}
@media(max-width: 600px){
  .mobile-qr{
    width:100% !important;
    text-align: center;
  }
}
</style>
