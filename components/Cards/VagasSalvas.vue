<template>
  <div>
    <h5>{{ deleteShow ? 'Vagas salvas' : 'Vagas visualizadas' }}</h5>
    <table class="table">
      <tr class="table-dark-blue">
        <th scope="col">EMPRESAS</th>
        <th scope="col">VAGAS</th>
        <th scope="col">EXPERIÊNCIA</th>
        <th scope="col">LOCALIZAÇÃO</th>
        <th scope="col">DATA DE ANÚNCIO</th>
        <th scope="col">DATA DE EXPIRAÇÃO</th>
        <th v-show="deleteShow" scope="col"></th>
      </tr>
      <tr v-for="i in 4" :key="i">
        <td>
          <div class="d-flex">
            <img src="/assets/img/armariofundo.jpg" class="img-fluid" />
            <p class="mt-2">Sonangol</p>
          </div>
        </td>
        <td>
          <p class="mt-2 text-Orange">Engenheiro de Minas</p>
        </td>
        <td>
          <p class="mt-2">5 anos</p>
        </td>
        <td>
          <p class="mt-2">Luanda</p>
        </td>
        <td>
          <p class="mt-2">21 Março 2021</p>
        </td>
        <td>
          <p class="mt-2">20 Abril 2021</p>
        </td>
        <td v-show="deleteShow">
          <button class="btn btn-danger">X</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    ['deleteShow']: Boolean,
  },
}
</script>

<style scoped>
.img-fluid {
  height: 40px;
  width: 40px;
  padding: 1%;
  border-radius: 100%;
}
.text-Orange {
  color: #f7b462;
}
.table-dark-blue {
  background-color: #1a2644;
  border-radius: 10px !important;
  color: #fff;
}
.borderRoudend,
.table {
  border: 1px solid #1a2644;
  border-radius: 30px !important;
}
td,
th {
  font-size: 0.8rem;
}
</style>
