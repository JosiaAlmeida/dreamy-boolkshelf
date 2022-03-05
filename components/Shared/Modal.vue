<template>
  <transition name="modal"
    ><div class="modal-mask" :style="backgroundModal">
      <div class="modal-wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    ['showPaint']: Boolean,
    ['colorb']: String,
  },
  mounted() {
    if (this.showPaint) document.body.classList.add('modal-open')
  },
  destroyed(){
    document.body.classList.remove('modal-open')
  },
  computed: {
    backgroundModal() {
      return {
        '--bColor': this.colorb ? this.colorb : 'rgba(122, 130, 127, 0.96)',
        // "--opacity": ""
      }
    },
  },
}
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}
.modal-mask::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px) !important;
  background-color: var(--bColor);
}
.modal-wrapper {
  display: table-cell;
  /* vertical-align: middle; */
}

.modal-container {
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  /* background-color: rgba(122, 130, 127, 0.9); */
  border-radius: 2px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  backdrop-filter: blur(3px) !important;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
