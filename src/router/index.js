import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    { path: '/documentos',
        name: 'Documentos',
        component: () => import('../views/DocumentLibrary.vue')
    },
    { path: '/plantillas',
        name: 'Plantillas',
        component: () => import('../views/TemplateGenerator.vue')
    },
    { path: '/usuarios',
        name: 'Usuarios',
        component: () => import('../views/UserManagement.vue')
    },
    { path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    { path: '/youtube',
        name: 'Youtube',
        component: () => import('../views/Youtube.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
