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
        <RoomartShowPaint :showPaint="showPaint" :openModal="openModal" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPaint: false,
    }
  },
  methods: {
    openModal() {
      this.showPaint = !this.showPaint
    },
  },
}
</script>
