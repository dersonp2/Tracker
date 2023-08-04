import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from 'vue-router';
import TarefasView from '@/views/TarefasView.vue';
import Projetos from '@/views/ProjetosView.vue';
import Formulario from '@/views/projetos/FumularioView.vue';
import Lista from '@/views/projetos/ListaView.vue';
const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: TarefasView
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'editar projeto',
                component: Formulario,
                props: true
            }
        ]
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;
