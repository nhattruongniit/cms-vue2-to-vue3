import Vue from 'vue'
import {createApp} from "vue";
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

// import { createApp } from './app'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css';

Vue.configureCompat({ 
  WATCH_ARRAY: false,
  COMPONENT_ASYNC: false,
  COMPONENT_V_MODEL: false,
  ATTR_FALSE_VALUE: false,
  ATTR_ENUMERATED_COERCION: false,
  INSTANCE_ATTRS_CLASS_STYLE: false
})

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

const vuetify = createVuetify({
    components: {
    ...components,
    ...labsComponents,
  },
});

// const { app } = createApp();

// app.use(vuetify);
// app.$mount('#app')

createApp(App).use(vuetify).mount("#app");
