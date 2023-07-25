<template>
<header>
  <h1>
    Tracker
  </h1>
  <!-- <button class="input" @click="incremento">
    Incrementar
  </button>
  <h3>Valor: {{ valor }}</h3> -->
</header>
</template>

<script lang="ts" setup>
// import { onMounted, ref } from 'vue';


// let valor = ref(1);

// function incremento (){
//   valor.value++;
// }
// onMounted(()=>{
//   console.log("Iniciou o componente: " + valor.value)
// })

</script>

<style>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
h1 {
  color: aliceblue;
  text-align: center;
  font-size: 2rem;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
} 
</style>