<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-2 d-flex reverse">
        <div class="backgroundImage">
          <div class="row">
            <div class="col-12"></div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-body">
              <div class="card-text">
                <h5 class="text-white-title">
                  Feira dos livros gigantesca no consulado português em Angola
                </h5>
                <small class="text-small-grey text-ocult">04 Agosto 2020</small>
                <p class="text-white text-ocult mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="button">
                  <button class="btn btnyellow">Ver noticía</button>
                  <div class="bar ml-3"></div>
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
p {
  font-size: 0.8rem;
}
.row {
  padding: 4%;
}
.reverse {
  flex-direction: row-reverse;
  justify-content: space-between;
}
.backgroundImage::before {
  content: '';
  top: 0;
  right: 0;
  height: 90%;
  width: 80%;
  position: absolute;
  border-radius: 5px;
  background: url('/assets/img/armario.jpg') no-repeat;
  background-size: cover;
  z-index: 1;
}
.card {
  background-color: rgba(115, 123, 118, 0.9);
  margin-top: 30%;
  height: 450px;
  width: 350px !important;
  z-index: 10;
  padding: 3%;
  /* padding: 10% 3%; */
}
.card-body {
  margin-top: 10%;
}
.card-text {
  margin-top: 5%;
}
.button {
  display: block;
  justify-content: left !important;
  align-items: flex-start !important;
  left: 0;
  width: 100%;
}
.bar {
  border: 1px solid #cbcfcd;
  width: 50px;
  margin-top: -5px;
  margin-left: 6px;
}
.btnyellow {
  color: rgb(230, 220, 205);
  text-align: start !important;
  margin-left: -13px;
}
.text-small-grey {
  color: #cbcfcd;
}

.text-white-title {
  color: #fff;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .row {
    padding: 0%;
  }
  .backgroundImage {
    height: 100%;
  }
  .backgroundImage::before {
    content: '';
    top: 0;
    right: 0;
    height: 70%;
    width: 100%;
    position: absolute;
    border-radius: 5px;
    background: url('/assets/img/armario.jpg') no-repeat;
    background-size: cover;
    z-index: 1;
  }
  .card {
    background-color: rgba(115, 123, 118, 0.9);
    margin-top: 40%;
    height: 150px;
    width: 80% !important;
    z-index: 10;
    /* padding: 10% 3%; */
  }
  .card-body {
    margin-top: auto;
  }
  .card-text {
    margin-top: auto;
  }
  .text-ocult {
    visibility: hidden;
    height: 0px !important;
  }
  .text-white-title {
    font-size: 0.8rem;
  }
  .button {
    display: block;
    justify-content: left !important;
    align-items: flex-start !important;
    left: 0;
    width: 100%;
    margin-top: -25% !important;
  }
}
</style>
