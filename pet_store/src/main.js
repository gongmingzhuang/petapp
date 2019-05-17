import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'

import components from '@/assets/js/components.js'

import 'mint-ui/lib/style.min.css'
import '@/assets/lib/mui/dist/css/mui.css'
import '@/assets/lib/mui/dist/css/icons-extra.css'


Vue.config.productionTip = false
Vue.use(MintUI)

// 1.注册全局组件
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
