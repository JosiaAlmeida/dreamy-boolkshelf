<template>
  <div class="button mt-2 w-100 d-flex justify-content-center">
    <div>
      <nuxt-link :to="to" class="btn btnyellow"> {{ name }} </nuxt-link>
      <div class="w-100">
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
    ['color']: String,
  },
  computed: {
    color() {
      this.color = !this.color ? '#E0DAD0' : '#444851'
      return { '--color-background': this.color }
    },
  },
}
</script>

<style scoped>
.bar {
  border: 1px solid #38483f;
  width: 50px;
  margin-top: -5px;
  margin-left: 4px !important;
}
.btnyellow {
  color: #38483f;
  text-align: start !important;
  margin-left: -13px;
}
</style>
