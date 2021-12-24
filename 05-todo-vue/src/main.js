import { createApp } from 'vue';
import App from './App.vue';
import { todos } from './composables/todo';

const checkLocalStorage = () => {
	if (localStorage.getItem('todos')) {
		todos.value = JSON.parse(localStorage.getItem('todos'));
	}
};

createApp(App).use(checkLocalStorage).mount('#app');
