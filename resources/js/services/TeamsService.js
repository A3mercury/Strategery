const TeamsService = {

	_index() {
		return axios.get('/api/teams')
			.then((response) => {
				return response.data.data;
			});
	},

	_store(payload) {
		return axios.post('/api/teams/create', payload)
			.then((response) => {
				return response.data.teams;
			})
			.catch((error) => {
				console.log(error);
			})
	}
}

export default TeamsService;