<template>
  <div class="w-100">
    <SharedNavbar colorb="#28493C" />
    <div class="pt-10">
      <EventHero :lastEvent="events" />
      <div class="container-fluid">
        <div class="row justify-content-center p-2">
          <div class="col-12">
            <form v-on:submit.prevent="searchDB" class="w-100">
              <div class="form-group">
                <input type="text" name="" placeholder="Pesquisar" v-model="pesquisar" class="form-control" id="">
              </div>
            </form>
            <div v-if="events.length">
                <EventListCard
              :carouselData="events"
              :rowmobile="3"
              :vertical="false"
              :row="events.length > 4 ? 3 : 1"
              :verticalSwiping="false"
            />
            </div>
            <div v-else>
              <h4>{{lang.title}}</h4>
            </div>
          </div>
         
        </div>
      </div>
    </div>

    <!-- <SharedFooter /> -->
  </div>
</template>

<script>
import queriesEvents from '../graphQL/queriesEvents.gql'
import eventsFilter from '../graphQL/queriesEventsFilter.gql'
export default {
  name: 'event',
  data() {
    return {
      events: [],
      pesquisar:''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$apollo
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
          this.events = this.$flattenData(data.queryEventsContents, 'data')
          // console.log('events', this.events)
        })
        .catch((error) => error)
    },
     searchDB(){
        this.$apollo
        .query({
          query: eventsFilter,
           variables: {
            filter: `contains(data/title/${this.$i18n.locale}, '${this.pesquisar}')`,
          },
          fetchPolicy: 'no-cache',
          context: {
            headers: {
              'X-Languages': this.$i18n.locale,
            },
          },
        })
        .then((response) => {
          const data = response.data
          this.events = this.$flattenData(data.queryEventsContents, 'data')
        })
        .catch((error) => error)
    }
  },
   computed: {   
    lang() {
      return {
        title: this.$t("noInformation.title"),
      };
    },
  },
}
</script>

<style scoped>
:is(body, html) {
  overflow-x: hidden !important;
}
.form-control {
  width: 40%;
  border: 1px solid #000;
  text-align: center;
  margin:auto;
}
input::placeholder {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .form-control {
    width: 100%;
  }
}
</style>
