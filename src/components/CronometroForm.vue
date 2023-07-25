<template>
  <section><strong>{{ tempoDecorrido }}</strong></section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
  tempoSegundos: {type: Number, default: 0}
})


const tempoDecorrido = computed(()=>{
  return new Date(props.tempoSegundos * 1000).toISOString().substr(11,8);
})
</script>