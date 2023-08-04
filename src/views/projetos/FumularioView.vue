<template>
    <section class="projetos">
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nome" class="label"> Nome projeto </label>
                <input
                    type="text"
                    class="input"
                    v-model="nomeDoProjeto"
                    id="nome"
                />
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
import type IProjeto from '@/interfaces/IProjeto';
import { onMounted, ref } from 'vue';
import { projetoStore } from '@/store/projeto';
import { useRouter } from 'vue-router';

const store = projetoStore();
const router = useRouter();
const props = defineProps(['id']);

console.log('receu o id: ', props);
let nomeDoProjeto = ref('');
const projeto = ref<IProjeto | null>(null);

onMounted(() => {
    if (props.id) {
        projeto.value = store.buscarProjetoPorId(props.id);
        nomeDoProjeto.value = projeto.value?.nome || '';
    }
});

function salvar() {

    const projeto: IProjeto = {
        nome: nomeDoProjeto.value,
        id: new Date().toISOString()
    };

    if (props.id) {
        projeto.id = props.id
        store.alterarNome(projeto)
    } else {
        store.adicionarProjeto(projeto);
    }

    router.push('/projetos');
}
</script>

