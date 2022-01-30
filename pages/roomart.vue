<template>
  <div class="">
    <SharedNavbar colorb="#28493C" />
    <div class="container-fluid pt-10">
      <div class="row">
        <RoomartTitleDescription />
        <SharedPainting />
        <RoomartShowPaint  :showPaint="showPaint" />
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
  }   
}
</script>
