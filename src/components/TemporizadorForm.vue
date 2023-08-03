<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroForm :tempo-segundos="tempoSegundo" />
       
        <BotaoIcone    icone="fas fa-play"  @btn-clicked="iniciar"></BotaoIcone>
        
        <BotaoIcone icone="fas fa-stop" nome="Stop" @btn-clicked="finalizar"></BotaoIcone>
    </div>
    
</template>

<script lang="ts" setup>
import CronometroForm from './CronometroForm.vue';
import { ref } from 'vue';
import BotaoIcone from '@/components/BotaoIcone.vue';
const tempoSegundo = ref(0);
let cronometro = 0;
let cronometroRodando = ref(false);

const emit = defineEmits(['aoTemporizadorFinalizado']);

function iniciar() {
    cronometro = setInterval(() => {
        tempoSegundo.value++;
    }, 1000);
    cronometroRodando.value = true;
}

function finalizar() {
    clearInterval(cronometro);
    cronometroRodando.value = false;
    emit('aoTemporizadorFinalizado', tempoSegundo.value);
    tempoSegundo.value = 0;
}
</script>
