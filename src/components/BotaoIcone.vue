<template>
    <button class="button" :disabled="disabilitado" @click="emitClick">
        <span class="icon"  v-if="icone !== ''">
            <i :class="icone"></i>
        </span>
        <span>{{ nome }}</span>
    </button>
</template>

<script setup lang="ts">
defineProps({
    icone: { type: String, default: '' },
    nome: { type: String, default: ''},
    disabilitado: { type: Boolean, default: false }
});

const emit = defineEmits(['btnClicked']);

function emitClick() {
    emit('btnClicked');
}
</script>
