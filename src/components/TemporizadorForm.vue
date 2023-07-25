<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroForm :tempo-segundos="tempoSegundo" />

        <BotaoIcone
            :disabilitado="cronometroRodando"
            nome="Play"
            icone="fa-solid fa-play"
            @btn-clicked="iniciar"
        />
        <BotaoIcone
            :disabilitado="!cronometroRodando"
            nome="Stop"
            icone="fas fa-stop"
            @btn-clicked="finalizar"
        />
    </div>
</template>

<script lang="ts" setup>
import BotaoIcone from './BotaoIcone.vue';
import CronometroForm from './CronometroForm.vue';

import { ref } from 'vue';

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
