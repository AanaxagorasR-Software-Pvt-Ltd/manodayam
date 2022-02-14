import axios from "../../utill/axios";

class products {

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
        return axios.post( '/products/new', data);
    }
    delete(id) {
        return axios.delete(`/products/delete/${id}`);
    }
}

export default new products();