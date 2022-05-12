import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: '/login', component: () => import('@/views/LoginPage') }, // 코드 스플리팅 (다이나믹 임포트)
		{ path: '/signup', component: () => import('@/views/SignupPage') },
	],
});
