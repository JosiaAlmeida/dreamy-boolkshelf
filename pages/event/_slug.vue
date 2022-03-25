<template>
  <div class="container">
    <div class="row">
      <div class="col-12 LinkContent mt-4 mb-4">
        <nuxt-link to="/" class="Link">Fechar</nuxt-link>
      </div>
      <div class="mt-2 col-md-7 img col-sm-12" :style="getImage">
        <!-- <img src="/assets/img/armario.jpg" alt="" class="img-fluid" /> -->
      </div>
      <!-- <div class="col-md-1"></div> -->
      <div class="col-md-5 mt-2 pl-5 w-100 col-sm-12">
        <h3 class="text-white-title">
          {{ events.title }}
        </h3>
        <p>
          {{ events.description }}
        </p>
      </div>
      <div class="col-md-7 mt-5 mb-5 d-flex justify-content-between">
        <small class="text-small-grey"> {{ getDate }} </small>
        <small class="text-small-grey">Partilhar </small>
      </div>
    </div>
  </div>
</template>

<script>
import queriesEvents from '~/graphQL/queriesEvents.gql'
export default {
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  data() {
    return {
      routes: null,
      events: [],
    }
  },
  created() {},
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      await this.$apollo
        .query({
          query: queriesEvents,
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          const data = response.data
          const dataEvent = this.$flattenData(data.queryEventsContents, 'data')
          this.events = dataEvent.find(({ id }) => id == this.slug)
          // console.log(this.events)
        })
        .catch((error) => error)
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.events.date)
      const [, month, day, years] = date.toString().split(' ')
      return `${day} ${month} ${years}`
    },
    getImage() {
      if (this.events) {
        if (this.events.images) {
          // console.log('images', images)
          const images = this.events.images[0].url
          // console.log('images', images)
          return {
            '--image': `url(${images})`,
          }
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
  text-align: start;
}
.img {
  width: 100%;
  height: 500px;
  position: relative;
  /* background-color: red; */
}
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 7px !important;
  background: var(--image) no-repeat;
  background-size: cover;
}
.LinkContent {
  padding: 1%;
}
.Link {
  color: #28493c;
  font-weight: 600;
  font-size: 20px;
  margin-left: -1%;
  border-bottom: 1px solid #000;
}
.Link:hover {
  text-decoration: none;
}
.text-white-title {
  color: #636e6a !important;
  font-weight: bold;
}
.text-small-grey {
  color: #bcbcbc;
}
@media only screen and (max-width: 600px) {
  .img {
    height: 300px;
  }
  .img::before {
    border-radius: 0px !important;
  }
  .LinkContent {
    width: 100%;
    text-align: right !important;
  }
}
</style>

