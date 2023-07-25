<script setup lang="ts">
import BarraLateral from '@/components/BarraLateral.vue';
import { ref } from 'vue';

let modoEscuro = ref(false);

function alterarTema(alterar: { value: boolean; }){
  modoEscuro.value = alterar.value;
  console.log('Alterar o tema' + alterar.value)
}
</script>

<template>
  <main class="columns is-gapless is-multiline " :class="{'modo-escuro': modoEscuro}">
    <div class="column is-one-quarter">
        <BarraLateral @tema-alterado="alterarTema"/>

    </div>

    <div class="column is-three-quarters conteudo">
       <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped >
.lista{
padding: 1.5rem;
}

main{
  --bg-primario: #fff;
  --texto-primario: #000
}
main.modo-escuro{
  --bg-primario: #03192e;
  --texto-primario: #fcfeff;
}

.conteudo{
  background-color: var(--bg-primario);
  color: var(--texto-primario) !important;
}
</style>
