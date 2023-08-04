<template>
  <section class="projetos">
      <router-link to="/projetos/novo" class="button">
          <span class="icon is-small">
              <i class="fas fa-plus"></i>
          </span>
          <span>Novo projeto</span>
      </router-link>
      <table class="table is-fullwidth">
          <thead>
              <tr>
                  <td>ID</td>
                  <td>NOME</td>
                  <td>AÇÕES</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="projeto in listaProjetos" :key="projeto.id">
                  <td>{{ projeto.id }}</td>
                  <td>{{ projeto.nome }}</td>

                  <td>
                      <router-link
                          :to="`/projetos/${projeto.id}`"
                          class="button">
                          <span class="icon is-small">
                              <i class="fas fa-pencil-alt"></i>
                          </span>
                      </router-link>
                      <button
                          class="button ml-2"
                          @click="store.removerProjeto(projeto.id)"
                      >
                      <span class="icon is-small">
                              <i class="fas fa-trash-alt"></i>
                          </span>
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </section>
</template>

<script lang="ts" setup>
import { projetoStore } from '@/store/projeto';
import { storeToRefs } from 'pinia';
const store = projetoStore();

let { listaProjetos } = storeToRefs(store);
</script>

<style>
.projetos {
  padding: 1.25rem;
}
</style>
