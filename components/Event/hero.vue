<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="col-12 d-flex reverse text-left justify-content-between">
        <div class="mt-5 backgroundImage"></div>
        <div class="mt-5">
          <div class="card p-2" style="width: 18rem">
            <div class="card-body">
              <div class="card-text mt-5">
                <h4 class="text-white">
                  Feira dos livros gigantesca no consulado português em Angola
                </h4>
                <small class="text-small-grey">04 Agosto 2020</small>
                <p class="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="button">
                  <button class="btn btnyellow">Ver noticía</button>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.reverse{
  flex-direction: row-reverse;
}
.backgroundImage {
  z-index: -1;
}
.backgroundImage::before {
  content: '';
  top: 0;
  right: 0;
  height: 90%;
  width: 80%;
  position: absolute;
  border-radius: 6px;
  background: url('/assets/img/armario.jpg') no-repeat;
  background-size: cover;
}
.card {
  background-color: rgba(115, 123, 118, 0.8);
  margin-top: 20%;
  height: 450px;
  width: 350px!important;
}
.bar {
  border: 1px solid #CBCFCD;;
  width: 50px;
  margin-top: -5px;
  margin-left: 10px;
}
.button{}
.btnyellow {
  color: rgb(230, 220, 205);
}
.text-small-grey{
  color: #CBCFCD;
}
</style>
