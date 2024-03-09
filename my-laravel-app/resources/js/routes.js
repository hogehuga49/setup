import { createRouter, createWebHistory } from "vue-router";
import WebRoot from "./Components/Web/Web.root.vue";
import Home from "./Components/Web/Home/Home.page.vue";
// import AdminLogin from "./Components/Admin/Login/Login.page.vue";
// import AdminHome from "./Components/Admin/Home/Home.page.vue";
// import AdminRoot from "./Components/Admin/Admin.root.vue";

// import About from './components/About.vue'
// import Item from './components/Item.vue'
// import NotFound from './components/404.vue'

const routes = [
    /**
     * web
     */
    {
        path: "/",
        name: "WebRoot",
        component: WebRoot,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
        ],
    },

    /**
     * admin
     */
    // {
    //     path: "/admin",
    //     name: "AdminRoot",
    //     component: AdminRoot,
    //     children: [
    //         {
    //             path: "login",
    //             name: "AdminLogin",
    //             component: AdminLogin,
    //         },
    //         {
    //             path: "",
    //             name: "AdminHome",
    //             component: AdminHome,
    //             meta: { requiresAuth: true },
    //         },
    //     ],
    // },

    // {
    //   path: '/404',
    //   name: '404-NotFound',
    //   component: NotFound,
    // },

    // 存在しないページの場合は強制的にホーム画面に
    {
        path: "/:pathMatch(.*)",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // NOTE: 全画面でページ遷移時にスクロール位置をリセット
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        };
    },
});

export default router;
