const AuthService = {

    _logout() {
        return axios({
            method: 'post',
            url: '/logout',
            params: {},
        });
    }
}

export default AuthService;
