<script setup lang="ts">
import BarraLateral from '@/components/BarraLateral.vue';
import FormularioCadastro from '@/components/FormularioCadastro.vue'
import TarefaForm from './components/TarefaForm.vue';
// import type {ITarefa} from './interfaces/ITarefa'
import  {type ITarefa} from './interfaces/ITarefa';
import { ref } from 'vue';

// const tarefas: ITarefa[] = [];
const tarefas = ref<ITarefa[]>([]);


function salvarTarefa(tarefa: ITarefa){
  console.log(tarefa)
  tarefas.value.push(tarefa);
  console.log('Add tarefa ', tarefas.value.length)

}
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
        <BarraLateral/>

    </div>

    <div class="column is-three-quarters">
        <FormularioCadastro @ao-finalizar="salvarTarefa"/>

        <!-- Lista tarefas -->
        <div class="lista">
        <TarefaForm v-for="tarefa in tarefas" :key="tarefa.descricao" :tarefa="tarefa"/>
      </div>

    </div>


  </main>
</template>

<style scoped >
.lista{
padding: 1.5rem;
}
</style>
