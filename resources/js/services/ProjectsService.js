const ProjectsService = {
	
	_index() {
		return axios({
			method: 'get',
			url: '/api/projects',
		})
			.then((response) => {
				return response.data.data;
			});
	},

	_store(payload) {
		return axios({
			method: 'post',
			url: '/api/projects/create',
			params: payload,
		})
			.then((response) => {
				return response.data.data;
			});
	}
}

export default ProjectsService;
