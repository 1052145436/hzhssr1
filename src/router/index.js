import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import store from '@/store'
import home from './modules/home'
import about from './modules/about'
import contact from './modules/contact'
import cultrue from './modules/cultrue'
import notice from './modules/notice'
import recruit from './modules/recruit'
import supplier from './modules/supplier'
import introduce from './modules/introduce'
import other from './modules/other'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        ...home,
        ...about,
        ...contact,
        ...cultrue,
        ...notice,
        ...recruit,
        ...supplier,
        ...introduce,
        ...other
    ]
})

router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to) => {
    if (process.browser) {
        window.scrollTo(0, 0)
    }
})
sync(store, router)

export default router
