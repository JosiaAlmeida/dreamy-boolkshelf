<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-2 d-flex reverse">
        <div class="backgroundImage" :style="getImage">
          <div class="row">
            <div class="col-12"></div>
          </div>
        </div>
        <div class="">
          <div class="card p-3">
            <div class="card-body">
              <div class="card-text" v-if="lastEvent.length > 0">
                <h5 class="text-white-title">
                  {{ lastEvent[lastEvent.length - 1].title }}
                </h5>
                <small class="text-small-grey">{{ getDate }}</small>
                <p class="text-white mt-3">
                  {{ lastEvent[lastEvent.length - 1].description }}
                </p>
              </div>
              <div class="card-text" v-else>
                <h5 class="text-white-title">{{lang.title}}</h5>
              </div>
              <div class="button" v-if="lastEvent.length > 0">
                <nuxt-link
                  class="btn btnyellow"
                  :to="'event/' + lastEvent[lastEvent.length - 1].id"
                  >Ver noticía</nuxt-link
                >
                <div class="bar ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['lastEvent']: Array,
  },
  computed: {
    getDate() {
      const date = new Date(this.lastEvent[this.lastEvent.length - 1].date)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
     lang() {
      return {
        title: this.$t("noInformation.title"),
      }
      },
    getImage() {
      if (this.lastEvent.length) {
        const images = this.lastEvent[this.lastEvent.length - 1].images[0].url
        return {
          '--image': `url(${images})`,
        }
      }
      return {
        '--image': `url(/assets/img/Grupo 412@2x.png)`,
      }
    },
  },
}
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
  border-radius: 5px;
  background: var(--image) no-repeat;
  background-size: cover;
}
.card {
  background-color: rgba(115, 123, 118, 0.9);
  margin-top: 30%;
  height: 450px;
  width: 350px !important;
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
  font-size: 22px;
}
.text-small-grey {
  color: #cbcfcd;
}

.text-white-title {
  color: #fff;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  p {
    font-size: 1rem;
  }
  .row {
    padding: 0%;
  }
  .col-12 {
    padding-left: 0% !important;
    padding-right: 0% !important;
  }
  .reverse {
    display: inline-block !important;
    flex-direction: column;
    justify-content: none;
  }
  .backgroundImage {
    z-index: 1;
    width: 100% !important;
    height: 50% !important;
    position: relative;
  }
  .backgroundImage::before {
    content: '';
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100% !important;
    position: absolute;
    border-radius: 0px;
    background: var(--image) no-repeat;
    background-size: cover;
  }
  .card {
    margin-top: auto;
    background-color: #fff;
    color: rgb(115, 123, 118);
    border: none !important;
    width: 100%;
  }
  .card-text,
  .card-body {
    margin-top: auto;
  }
  .text-white-title {
    font-size: 1.5rem;
  }
  .text-white-title,
  .btnyellow {
    color: #636e6a !important;
  }

  .text-small-grey {
    overflow: hidden !important;
    visibility: hidden;
  }
  .text-white {
    margin-top: -20px !important;
    color: #000 !important;
  }
  .bar {
    border: 1px solid rgb(115, 123, 118);
    width: 50px;
    margin-top: -5px;
    margin-left: auto;
  }
}
</style>
