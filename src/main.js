import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false



router.beforeEach((to, from, next)=>{
  store.commit('nowStatus', 'loading')
  next();
})

router.afterEach(()=>{
  store.commit('nowStatus', 'end')
  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)
  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
