<template>
  <div class="container-fluid mt-5 mb-2 background">
    <div class="row p-3">
      <div class="col-12 mt-5 text-center">
        <h3>Eventos</h3>
        <p>
          E fora dos livros tem ideia do que se passa? Fica por dentro dos
          eventos que <br />
          ocorrem a volta do universo literário.
        </p>
        <SharedLinkMore colors="#E0DAD0" name="Ver Todos" to="/events" />
      </div>
      <div class="col-12">
        <HomePartialHeroEvents />
      </div>
      <div class="col-12">
        <div v-if="events.length" class="row justify-content-center">
          <SharedCarousel
            :carouselData="events"
            :row="1"
            :rowmobile="2"
            :vertical="false"
            :verticalSwiping="true"
          />
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
@media screen and (max-width: 600px) {
  .background {
    /* margin-bottom: -2px !important; */
  }
}
</style>
