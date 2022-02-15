<template>
  <div class="row p-2 mt-5">
    <div v-for="i in 4" class="col-12" :key="i">
      <div class="card pl-4 pr-4 mb-4">
        <div
          class="
            d-flex
            p-3
            align-items-center
            justify-content-between
            flex-wrap
          "
        >
          <div class="d-flex flex-wrap">
            <img src="/assets/img/armariofundo.jpg" class="img" />
            <div class="ml-2 heightRem">
              <h6>Title</h6>
              <p class="card-text">
                <small class="text-muted"
                  >Last updated 3 mins ago Last updated 3 mins ago Last updated
                  3 mins ago</small
                >
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div>
            <h6 :class="deleteRequest ? 'disabled' : ''">
              A clé quer agendar uma entrevista para esta vaga
            </h6>
            <div class="d-flex justify-content-center">
              <button
                v-show="!acceptRequest && !deleteRequest"
                class="btn mr-2"
              >
                Aceitar
              </button>
              <p
                v-show="acceptRequest && !deleteRequest"
                class="text-uppercase text-wrap w-50 text-orange"
              >
                Entrevista marcada para 12/02/2002 as 16:00
              </p>
              <button v-show="!deleteRequest" class="btn">Eliminar</button>
              <button
                v-show="deleteRequest"
                class="btn disabledButton"
                disabled
              >
                Rejeitado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteRequest: false,
      acceptRequest: false,
    }
  },
}
</script>

<style scoped>
.btn {
  border-radius: 50px;
  border: 1px solid #ffa22a;
  font-size: 0.8rem;
  height: 35px;
}
.disabled {
  color: gray;
}
.disabledButton {
  border: 1px solid gray;
}
.img {
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
}
.heightRem {
  height: 4rem;
}
h6 {
  font-size: 0.8rem;
  font-weight: bold;
}
.card-text {
  font-size: 0.8rem;
  margin-top: -10px;
}
.text-orange {
  color: #ffa22a;
  font-size: 0.7rem;
}
</style>
