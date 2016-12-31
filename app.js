const app = new Vue({
	el: '#app',
	data: {
		message: 'teste',
		teste: []
	},
	methods: {
		abreAndre: () => {
			app.abre('andre');
		},

		abreQg: () => {
			app.abre('qg');
		},

		abre: (portao) => {
			app.$http
				.get('http://172.16.0.11:8080/' + portao)
				.then(() => {
					console.log('OK');
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
})