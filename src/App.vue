<script setup lang="ts">
import BarraLateral from '@/components/BarraLateral.vue';
import FormularioCadastro from '@/components/FormularioCadastro.vue'
import TarefaForm from './components/TarefaForm.vue';
import Box from './components/Box.vue';
// import type {ITarefa} from './interfaces/ITarefa'
import  {type ITarefa} from './interfaces/ITarefa';
import { computed, ref } from 'vue';

// const tarefas: ITarefa[] = [];
const tarefas = ref<ITarefa[]>([]);
let modoEscuro = ref(false);


function salvarTarefa(tarefa: ITarefa){
  console.log(tarefa)
  tarefas.value.push(tarefa);
  console.log('Add tarefa ', tarefas.value.length)
}

const listaEstaVazia = computed(()=>{
  return tarefas.value.length === 0
});

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
        <FormularioCadastro @ao-finalizar="salvarTarefa"/>

        <!-- Lista tarefas -->
        <div class="lista">
        <TarefaForm v-for="tarefa in tarefas" :key="tarefa.descricao" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">
          Você não está produtivo hoje
        </Box>
      </div>

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
