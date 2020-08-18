const UserService = {

	_get() {
		return axios.get('/api/test')
			.then(response => {
				return response.data.user;
			});
	},

}

export default UserService;