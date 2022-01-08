<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <RoomartTitleDescription />
        <Painting />
        <RoomartShowPaint :showPaint="showPaint" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return{
      showPaint: false
    }
  },
}
</script>
