import { createRouter, createWebHistory } from "vue-router";

import Login from "./components/Login.vue";
import Register from "./components/Register.vue"
import Home from "./components/Home.vue"
import { useUserStore } from "./stores/user";


const requireAuth = async (to, from, next) => {
    const userStore = useUserStore()
    userStore.loadingSession = true
    

    if(userStore.userData == null){
        next('/Login');
        
    }else{
        next();
    }
    userStore.loadingSession = false

}


const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/Login", component: Login },
    { path: "/Register", component: Register },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;