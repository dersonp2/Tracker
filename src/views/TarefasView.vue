<script setup lang="ts">
import FormularioCadastro from '@/components/FormularioCadastro.vue';
import TarefaForm from '@/components/TarefaForm.vue';
import Box from '@/components/Box.vue';
import { type ITarefa } from '@/interfaces/ITarefa';
import { computed, ref } from 'vue';

// const tarefas: ITarefa[] = [];
const tarefas = ref<ITarefa[]>([]);
let modoEscuro = ref(false);

function salvarTarefa(tarefa: ITarefa) {
    console.log(tarefa);
    tarefas.value.push(tarefa);
    console.log('Add tarefa ', tarefas.value.length);
}

const listaEstaVazia = computed(() => {
    return tarefas.value.length === 0;
});
</script>

<template>
    <FormularioCadastro @ao-finalizar="salvarTarefa" />
    <div class="lista">
        <TarefaForm
            v-for="tarefa in tarefas"
            :key="tarefa.descricao"
            :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia"> Você não está produtivo hoje </Box>
    </div>
</template>

<style scoped>
.lista {
    padding: 1.5rem;
}
</style>
