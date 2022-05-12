<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">Username: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">Password: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">Nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">가입</button>
	</form>
</template>

<script>
export default {
	// <= vda 입력 code snippets => data() {} 를 쉽게 만들어 줍니다.
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
		};
	},
	methods: {
		submitForm() {
			console.log('폼 제출');
		},
	},
};
</script>

<style></style>
