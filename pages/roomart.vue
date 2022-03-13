<template>
  <div class="">
    <SharedNavbar colorb="#28493C" />
    <div class="container-fluid pt-10">
      <div class="row">
        <RoomartTitleDescription />
        <SharedPainting
          :slideShow="4"
          :slideScroll="4"
          :row="5"
          :openModal="openModal"
        />
        <RoomartShowPaint
          :showPaint="showPaint"
          :openModal="openModal"
          :Data="itemModal"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPaint: false,
      itemModal: [],
    }
  },
  methods: {
    openModal(item) {
      this.showPaint = !this.showPaint
      if (item != [] || item.length > 0) {
        const items = item?.map(function (item) {
          const description = item.description
          const images = item.images.map((item) => item.url)
          return { description, images }
        })
        this.itemModal = items
        console.log(this.itemModal)
      }
    },
  },
}
</script>
