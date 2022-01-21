<template>
  <div class="marginTopNegative PaddingCardSimple" :style="StyleCard">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">No mundo de Nora Roberts</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
        </p>
        <hr />
        <div class="d-flex">
          <div class="col-4">
            <small>10 Agosto 21</small>
          </div>
          <div class="col-4">
            <small>10 Agosto 21</small>
          </div>
          <div class="col-4">
            <small>10 Agosto 21</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ['paddingLeft']: String,
    ['paddingRight']: String,
  },
  computed: {
    StyleCard() {
      return {
        '--paddingLeft': this.paddingLeft,
        '--paddingRight': this.paddingRight,
      }
    },
  },
}
</script>

<style scoped>
p {
  font-size: 0.9rem;
}
.marginTopNegative {
  margin-top: -5%;
}
.PaddingCardSimple {
  padding: 0% var(--paddingLeft);
  /* padding-left: var(--paddingLeft);
  padding-right: var(--paddingRight); */
}
</style>
