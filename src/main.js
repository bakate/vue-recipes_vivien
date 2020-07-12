import '@/assets/main.scss'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'

//Individual Buefy components as Vue plugins
// Vue.use(Table)
// Vue.use(Input)

//here I've imported the whole package
//script is 48KB min+gzip  and //style is 39KB min + gzip(with bulma included)
Vue.use(Buefy)

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
