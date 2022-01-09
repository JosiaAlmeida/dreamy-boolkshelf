<template>
  <div class="row p-2">
    <div v-for="i in 6" class="col-5" :key="i">
      <div class="card mb-3 p-2">
        <div class="row cardBody no-gutters">
          <div class="col-1"></div>
          <div class="col-md-3 mt-2 mb-4 marginTop">
            <img
              src="/assets/img/armariofundo.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="col-md-7 marginTop">
            <div class="card-body p-3">
              <h6 class="card-title mb-3"><strong>Card title</strong></h6>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <p class="card-text">
                <small
                  class="text-muted"
                  :class="i == 2 || i == 5 ? 'text-green' : 'text-blue'"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>


<style scoped>
/* Cards */
.card-text {
  font-size: 0.6rem;
}
.card-title {
  font-size: 0.8rem;
}
.img-fluid {
  border-radius: 5px !important;
  height: 100%;
}
.cardBody {
  height: 100px;
}
.card-text {
  margin-top: -7%;
}
.marginTop {
  margin-top: -5px;
}
.text-blue {
  color: #c4e6ff !important;
}
.text-green {
  color: #10a049 !important;
}
</style>
