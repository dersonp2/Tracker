<template>
   <button class="button" @click="clicar" >
            <span class="icon" v-if="icone !== ''">
                 <i :class="icone"></i> 
            </span>
            <span>
            {{ nome || 'Sem nome'}}
            </span>
        </button>
</template>

<script lang="ts" setup>
// o que é que vou receber?
defineProps({
  icone: { type: String, default:''},
  nome: {type: String, default: ''}
})

const emit = defineEmits(['btnClicked', 'btnHover']);

function clicar(){
  console.log("Clicou")
  emit('btnClicked')
}

</script>