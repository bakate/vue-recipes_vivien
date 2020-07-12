import '@/assets/main.scss'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'

//Thanks to these lines, we can create some components that start with "Base", that we will be able to reuse them without the need of importing
const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
