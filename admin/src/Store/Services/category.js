import axios from "../../utill/axios";

class category {

    list(data) {
        return axios.get( '/', { params: data });
    }
    listAll() {
        return axios.get( "/all");
    }
    listAllIgnoreStatus() {
        return axios.get( "/all/ignore-status");
    }
    save(data) {
        return axios.post( '/category/new', data);
    }
    delete(id) {
        return axios.delete(`/category/delete/${id}`);
    }
}

export default new category();