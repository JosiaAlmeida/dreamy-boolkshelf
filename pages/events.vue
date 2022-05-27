<template>
  <div class="w-100">
    <SharedNavbar colorb="#28493C" />
    <div class="pt-10">
      <EventHero :lastEvent="events" />
      <div class="container-fluid">
        <div class="row justify-content-center p-2">
          <div class="col-12" v-if="events.length">
            <SharedSearchInput />
            <EventListCard
              :carouselData="events"
              :rowmobile="3"
              :vertical="false"
              :row="events.length > 4 ? 3 : 1"
              :verticalSwiping="false"
            />
          </div>
          <div v-else>
            <h4>Nenhuma informação</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- <SharedFooter /> -->
  </div>
</template>

<script>
import queriesEvents from '../graphQL/queriesEvents.gql'
export default {
  name: 'event',
  data() {
    return {
      events: [],
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
  },
}
</script>

<style scoped>
:is(body, html) {
  overflow-x: hidden !important;
}
</style>
