<template>
  <main>
    <div class="layouts">
      <Nuxt />
    </div>
    <Footer class="footer" />
  </main>
</template>
<script>
export default {
  computed: {
    getRout() {
      // console.log(this.$root._route.path)
    },
  },
}
</script>
<style scoped>
.layouts {
  height: 100%;
}
.footer {
  min-height: calc(100vh-90px);
}
</style>
