import { idText } from 'typescript'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/texts'},
        {path: '/texts', component: null},
        {path: '/texts/:id', component: null},
        {path: '/references', component: null},
        {path: '/references/:id', component: null, children :[
            {path: '/texts/:id', component: null},
        ]},
        {path: '/worksheets/', component: null},
        {path: '/worksheets/:id', component: null},
        {path: '/worksheets/recent', component: null},
        {path: '/:notFound(.*)', component: null}
    ]
})

export default router