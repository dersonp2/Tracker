<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>

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

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOME</td>
                </tr>
            </thead>
            <tbody>
              <tr v-for="projeto in listaProjetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td><button @click="store.removerProjeto(projeto.id)">Remover</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts" setup>
import type IProjeto from '@/interfaces/IProjeto';
import { ref } from 'vue';
import {projetoStore} from '@/store/projeto'
import {storeToRefs} from 'pinia'
const store = projetoStore()
let nomeDoProjeto = ref('');

let {listaProjetos} = storeToRefs(store);

function salvar() {
    console.log(nomeDoProjeto)
    const projeto: IProjeto = {
        nome: nomeDoProjeto.value,
        id: new Date().toISOString()
    };
    store.adicionarProjeto(projeto)
}
</script>

<style>
.projetos {
    padding: 1.25rem;
}
</style>
