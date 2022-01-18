<template>
  <div class="button mt-2 w-100 d-flex justify-content-center">
    <div>
      <nuxt-link :to="to" :style="Color" class="btn btnyellow">
        {{ name }}
      </nuxt-link>
      <div class="w-100" :style="Color">
        <div class="bar ml-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['to']: String,
    ['name']: String,
    ['colors']: String,
  },
  computed: {
    Color() {
      // '#E0DAD0'
      return { '--color-background': this.colors }
    },
  },
}
</script>

<style scoped>
.bar {
  border: 1px solid var(--color-background);
  width: 50px;
  margin-top: -5px;
  margin-left: 4px !important;
}
.btnyellow {
  color: var(--color-background);
  text-align: start !important;
  margin-left: -13px;
}
</style>
