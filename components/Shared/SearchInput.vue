<template>
  <div
    class="col-12 d-flex justify-content-center align-content-center mt-5 mb-5"
  >
    <input type="text" placeholder="Pesquisar" class="form-control mt-5" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-control {
  width: 40%;
  border: 1px solid #000;
  text-align: center;
}
input::placeholder {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .form-control {
    width: 100%;
  }
}
</style>
