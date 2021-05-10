import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Property',
      component: () => import('../views/index'),
      meta: {
        title: '数智园区数据可视化平台'
      },
      children: [
        {
          path: '/Property',
          component: () => import('../views/property/index'),
          meta: { title: '智慧海湾综合管理平台-指挥中心' }
        }
      ]
    }
  ]
})

export default router
