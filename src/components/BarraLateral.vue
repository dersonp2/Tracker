<template>
<header>
  <h1>
    Tracker
  </h1>
  <button class="button text-align-center" @click="alterarTema">
    {{ textoBotao }} modo escuro
  </button>
</header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['temaAlterado']);
let modoEscuro = ref(false);

const textoBotao = computed(() => {
  if (modoEscuro.value){
    return "Desativar"
  }
  return "Ativar"
});

function alterarTema(){
  modoEscuro.value = !modoEscuro.value;
  emit('temaAlterado', modoEscuro)
}
</script>

<style>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
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