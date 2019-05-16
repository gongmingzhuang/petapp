import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
})
