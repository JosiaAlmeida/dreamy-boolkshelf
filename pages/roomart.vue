<template>
  <div class="">
    <SharedNavbar colorb="#28493C" />
    <div class="container-fluid pt-10">
      <div class="row justify-content-center">
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
          :description="description"
          :closeModal="closeModal"
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
      description: '',
    }
  },
  methods: {
    openModal(item) {
      this.showPaint = !this.showPaint
      this.description = item.description
      this.itemModal = item.images
    },
    closeModal() {
      this.showPaint = false
    },
  },
}
</script>
