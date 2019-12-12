import Login from './components/Login.vue'
import Register from './components/Register.vue'
import App from './components/UserTodoList.vue'

export const routes = [
    {path: '', component: Login},
    {path: '/register', component: Register},
    {path: '/todo-list', component: App, meta: {requiresAuth: true}},
];