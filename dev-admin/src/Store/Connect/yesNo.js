import axios from "../../utill/axios";

class yesNo {

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
        return axios.post( '/yesNo/new', data);
    }
    delete(id) {
        return axios.delete(`/yesNo/delete/${id}`);
    }
}

export default new yesNo();