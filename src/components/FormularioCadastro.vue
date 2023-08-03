<template>
    <div class="box form">
        <div class="columns">
            <div
                class="column is-5"
                role="form"
                aria-label="Formulario de criação"
            >
                <input
                    type="text"
                    placeholder="Informe a tarefa"
                    class="input"
                    v-model="descricao"
                />
            </div>

            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto {{ totalProjetos }}</option>
                        <option
                            :value="projeto.id"
                            v-for="projeto in listaProjetos"
                            :key="projeto.id"
                        >
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorForm
                    @ao-temporizador-finalizado="finalizarTarefa"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TemporizadorForm from './TemporizadorForm.vue';
import type IProjeto from '@/interfaces/IProjeto';
import { projetoStore} from '@/store/projeto'
import  {storeToRefs} from 'pinia'

const store = projetoStore()
const {listaProjetos} = storeToRefs(store);
const {totalProjetos} = storeToRefs(store);

const descricao = ref('');
const idProjeto = ref('');

const emit = defineEmits(['aoFinalizar']);

function finalizarTarefa(tempoDecorrido: Number): void {
    emit('aoFinalizar', {
        duracaoSegundo: tempoDecorrido,
        descricao: descricao.value,
        projeto: listaProjetos.value.find( (proj:IProjeto) => proj.id == idProjeto.value)
    });

    descricao.value = '';
}
</script>

<style>
.form {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>
