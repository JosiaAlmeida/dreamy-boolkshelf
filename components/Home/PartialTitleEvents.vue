<template>
  <div class="container-fluid mt-5 mb-2 background">
    <div class="row p-3">
      <div class="col-12 mt-5 text-center">
        <h3 style="font-size:32px;">Eventos</h3>
        <p style="font-size:18px;">
          E fora dos livros tem ideia do que se passa? Fica por dentro dos
          eventos que <br />
          ocorrem a volta do universo literário.
        </p>
        <SharedLinkMore colors="#E0DAD0" name="Ver Todos" to="/events" />
      </div>
      <div class="col-12">
        <HomePartialHeroEvents :lastEvent="events" />
      </div>
      <div class="col-md-12 col-sm-12">
        <div v-if="events.length" class="row justify-content-center">
          <div v-for="(item, i) in getEvents" :key="i" class="ml-5 mr-5">
            <nuxt-link class="Link" :to="'event/' + item.id">
              <div
                class="cardContainer d-flex align-items-end p-4"
                :style="imageProps(item.images[0].url)"
              >
                <div class="w-100">
                  <h6 class="text-white">{{ item.title }}</h6>
                  <small class="text-small-grey">
                    {{ getDate(item.date) }}
                  </small>
                </div>
              </div>
            </nuxt-link>
          </div>
          <!-- <SharedCarousel
            :carouselData="events"
            :row="1"
            :rowmobile="3"
            :vertical="false"
            :verticalSwiping="false"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/shutterstock_1856415790.png',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/shutterstock_1856415790.png',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/shutterstock_1856415790.png',
        },
      ],
    }
  },
  props: {
    ['events']: Array,
  },
  computed: {
    getEvents() {
      return this.events.slice(0, 3)
    },
  },
  methods: {
    imageProps(img) {
      return { '--backgroundimage': `url(${img})` }
    },
    getDate(item) {
      const date = new Date(item)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
  },
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: rgba(99, 110, 106, 0.4);
  position: relative;
}
p {
  color: #808080;
}
.cardContainer {
  width: 300px !important;
  height: 300px;
  border-radius: 10px;
  margin: 1%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(105, 115, 111, 1) 93%
  );
  position: relative;
  color: #fff;
  cursor: pointer;
}
.cardContainer::before {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  width: 100% !important;
  height: 100%;
  border-radius: 10px;
  background: var(--backgroundimage) no-repeat;
  background-size: cover;
  z-index: -1;
}
.text-small-grey {
  color: #dce6e1;
}
.Link:hover {
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .background {
    /* margin-bottom: -2px !important; */
  }
  .cardContainer {
    width: 326px !important;
  }
  .slick-track {
    height: auto !important;
  }
}
</style>
