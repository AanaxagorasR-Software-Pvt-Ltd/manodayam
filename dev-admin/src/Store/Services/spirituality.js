import axios from "../../utill/axios";

class spirituality {

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
        return axios.post( '/spirituality/new', data);
    }
    delete(id) {
        return axios.delete(`/spirituality/delete/${id}`);
    }
}

export default new spirituality();