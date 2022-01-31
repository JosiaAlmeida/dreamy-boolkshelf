<template>
  <div>
    <div class="w-100 mb-2 d-flex justify-content-center">
      <a @click.prevent="scrollTop" href="#">Subir</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
