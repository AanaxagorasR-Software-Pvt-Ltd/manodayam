import axios from "../../utill/axios";

class banner {

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
        return axios.post( '/banner/new', data);
    }
    delete(id) {
        return axios.delete(`/banner/delete/${id}`);
    }
}

export default new banner();