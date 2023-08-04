import type IProjeto from '@/interfaces/IProjeto';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const projetoStore = defineStore('projeto', () => {
    // States
    const listaProjetos = ref<IProjeto[]>([]);

    // Getters
    const totalProjetos = computed(() => listaProjetos.value.length);

    // Action
    const adicionarProjeto = (projeto: IProjeto) => {
      listaProjetos.value.push(projeto);

    }
    const removerProjeto = (id: string) => {
      listaProjetos.value = listaProjetos.value.filter((x) => x.id !== id);
    }

    function buscarProjetoPorId(id: string) {
      return listaProjetos.value.find((projeto) => projeto.id === id) || null;
    }

    const alterarNome = (projeto: IProjeto) => {
      const projetoAlt = buscarProjetoPorId(projeto.id);
      if (projetoAlt) {
        projetoAlt.nome  = projeto.nome;
      } 
    }


    return {
        listaProjetos,
        totalProjetos,
        adicionarProjeto,
        removerProjeto,
        buscarProjetoPorId,
        alterarNome
    };
});
