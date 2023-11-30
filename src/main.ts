import '@unocss/reset/normalize.css';
import 'ant-design-vue/dist/reset.css';
import 'uno.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from '@/router';
import setIcon from '@/components/Icons';

import './style.css';
import App from './App.vue';

const app = createApp(App);

setIcon(app);

app.use(createPinia()).use(router).mount('#app');

