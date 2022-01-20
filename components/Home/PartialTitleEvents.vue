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
        <div class="row justify-content-center">
          <SharedCarousel
            :carouselData="images"
            :row="1"
            :rowmobile="2"
            :vertical="false"
            :verticalSwiping="false"
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
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: #c1c5c3;
}
p {
  color: #808080;
}
</style>
