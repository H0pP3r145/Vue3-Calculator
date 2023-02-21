import { createApp } from 'vue';
import App from './App.vue';
import store from "@/store";
import '@/assets/css/styles.scss';
import '@/assets/css/screen.scss';
import '@/assets/css/keyboard.scss';
import '@/assets/css/toggle-button.scss';

createApp(App)
    .use(store)
    .mount('#app')
