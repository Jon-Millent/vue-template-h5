import Vue from 'vue'
import Router from 'vue-router'



Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: Object.assign({
      time: new Date().getTime()
    }, query || {})
  })
}


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: ()=> import('../views/layout/index-layout.vue'),
      name: 'index',
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          component: ()=> import('../views/index/home.vue'),
          name: 'index-home'
        },
        {
          path: 'mine',
          component: ()=> import('../views/index/mine.vue'),
          name: 'index-mine'
        },
        {
          path: 'qa',
          component: ()=> import('../views/index/qa.vue'),
          name: 'index-qa',
          meta: {
            title: ''
          }
        }
      ]
    },
    {
      path: '/information',
      component: ()=> import('../views/information.vue'),
      name: 'information'
    }
  ]
})
