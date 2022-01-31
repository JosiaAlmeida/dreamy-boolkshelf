<template>
  <main>
    <div>
      <Nuxt />
    </div>
    <Footer />
  </main>
</template>
<script>
export default {
  computed: {
    getRout() {
      console.log(this.$root._route.path)
    },
  },
}
</script>
<style scoped>
</style>
