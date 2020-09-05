const PurchasesService = {

    _index(project_id = null) {
        return axios({
            method: 'get',
            url: '/api/purchases?project='+project_id,
        })
            .then((response) => {
                return response.data.data;
            });
    }
}

export default PurchasesService;
