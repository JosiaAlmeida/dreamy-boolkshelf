<template>
  <div class="col-12">
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-sm-12 text-center mt-5">
        <h3 class="text-title text-center">{{lang.title}}</h3>
        <p class="text-center">
          {{lang.description}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    computed: {   
    lang() {
      return {
        title: this.$t("arts.title"),
        description: this.$t("arts.description"),
      };
    },
  },
}
</script>
<style scoped>
.text-title {
  color: #636e6a;
  font-weight: bold;
}
</style>
