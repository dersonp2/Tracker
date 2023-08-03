import type IProjeto from '@/interfaces/IProjeto';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const projetoStore = defineStore('projeto', () => {
    // States
    const listaProjetos = ref([
        { id: new Date().toISOString(), nome: 'Typescript' },
        { id: new Date().toISOString(), nome: 'Vue' },
        { id: new Date().toISOString(), nome: 'Pinia' }
    ]);

    // Getters
    const totalProjetos = computed(() => listaProjetos.value.length);

    // Action
    const adicionarProjeto = (projeto: IProjeto) => {
      listaProjetos.value.push(projeto);

    }
    const removerProjeto = (id: string) => {
      listaProjetos.value = listaProjetos.value.filter((x) => x.id !== id);
    }

    return {
        listaProjetos,
        totalProjetos,
        adicionarProjeto,
        removerProjeto
    };
});
