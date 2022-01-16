<template>
  <div class="">
    <SharedNavbar colorb="#28493C" />
    <div class="pt-10">
      <EventHero />
      <div class="container-fluid">
        <div class="row justify-content-center p-2">
          <SharedSearchInput />
          <SharedCarousel
            :carouselData="images"
            :rowmobile="3"
            :vertical="false"
            :verticalSwiping="false"
          />
        </div>
      </div>
    </div>

    <!-- <SharedFooter /> -->
  </div>
</template>

<script>
export default {
  name: 'event',
  data() {
    return {
      images: [
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armario.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
        {
          title: 'Feira dos livos gigantesca no consulado português em Angola',
          date: '09 Agosto 21',
          img: '/assets/img/armariofundo.jpg',
        },
      ],
    }
  },
}
</script>
