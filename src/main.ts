import { createApp } from 'vue' 
import { createPinia } from 'pinia'

import App from './App.vue' //Es el main
import router from './router' //rutas 

//alertas
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Vuetify - capa de estilos / css
//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' //Crea todos los componentes existentes
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App) //se crea la app

app.use(createPinia())
app.use(router)
app.use(vuetify) //se indica q se usara vuetify
app.use(VueSweetalert2);

app.mount('#app') //al final montamos la app