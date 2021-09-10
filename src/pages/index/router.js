import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Study from './app/routers/study'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/study',
      name: 'study',
      component: resolve => require(['./app/routers/study'], resolve)
      // component: () => import('./app/routers/study')
    },
    {
      path: '/parseDom',
      name: 'parseDom',
      component: () => import('./app/routers/parse-dom')
    },
    {
      path: '/native',
      name: 'native',
      component: () => import('./app/routers/native')
    },
    {
      path: '/slotname',
      name: 'slotname',
      component: () => import('./app/routers/slot-name')
    },
    {
      path: '/csstest',
      name: 'csstest',
      component: () => import('./app/routers/css-test')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('./app/routers/transition')
    },
    {
      path: '/animation-page',
      name: 'animation-page',
      component: () => import('./app/routers/animation-page')
    }
  ]
})
