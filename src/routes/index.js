import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history', // url에 #이 제거 된다 => 이 경우 prod서버에는 별도의 설정이 추가되어야 합니다.(https://router.vuejs.org/guide/essentials/history-mode.html)
	routes: [
		{ path: '/', redirect: '/login' }, // 리다이렉트 설정
		{ path: '/login', component: () => import('@/views/LoginPage') }, // 코드 스플리팅 (다이나믹 임포트)
		{ path: '/signup', component: () => import('@/views/SignupPage') },
		{ path: '*', component: () => import('@/views/NotFoundPage.vue') }, // fallBack 기능
	],
});
