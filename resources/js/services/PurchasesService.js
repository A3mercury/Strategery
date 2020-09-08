const PurchasesService = {

    _index(project_id = null, page = 1) {
        return axios({
            method: 'get',
            url: '/api/purchases?project='+project_id+'&page='+page,
        })
            .then((response) => {
                return response.data;
            });
    }
}

export default PurchasesService;
