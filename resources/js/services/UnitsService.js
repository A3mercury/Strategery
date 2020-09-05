const UnitsService = {

    _index(project_id = null) {
        return axios({
            method: 'get',
            url: '/api/units?project=' + project_id,
        })
            .then((response) => {
                return response.data.data;
            });
    }
}

export default UnitsService;