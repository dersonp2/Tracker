<template>
<div class="box">
  <div class="columns">
    <div class="column is-7">
       {{ tarefa?.descricao || 'Tarefa Sem Descrição'}}
    </div>
    <div class="column">
      <CronometroForm :tempo-segundos="tarefa ? tarefa.duracaoSegundo : 0"/>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import CronometroForm from './CronometroForm.vue';
import type { ITarefa } from '@/interfaces/ITarefa';

defineProps({
  tarefa: {type: Object as PropType<ITarefa>, requerid: true}
  })
</script>

<style scoped>
.box{
  background-color: rgb(250, 223, 188);
}

</style>