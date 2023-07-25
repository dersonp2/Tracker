import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import TarefasView from "@/views/TarefasView.vue";
import Projetos from "@/views/ProjetosView.vue";

  const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'tarefas',
      component: TarefasView},
      {
        path: '/projetos',
        name: 'projetos',
          component: Projetos},
  ];

  const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
  });

  export default roteador;