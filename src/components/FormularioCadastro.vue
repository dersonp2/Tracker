<template>
    <div class="box form">
        <div class="columns">
            <div
                class="column is-8"
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

            <div class="column">
                <TemporizadorForm @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TemporizadorForm from './TemporizadorForm.vue';


const descricao = ref('');

const emit = defineEmits(['aoFinalizar'])

function finalizarTarefa(tempoDecorrido: Number): void{
  console.log("Tempo decorrido " + tempoDecorrido);
  console.log('Descricao: ' + descricao.value);
  
  emit('aoFinalizar', {
    duracaoSegundo: tempoDecorrido,
  descricao: descricao.value
  });

  descricao.value = '';

}
</script>

<style>

.form{
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>
