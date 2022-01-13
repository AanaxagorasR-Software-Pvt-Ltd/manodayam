import axios from "../../utill/axios";

class question {

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
        return axios.post( '/question/new', data);
    }
    delete(id) {
        return axios.delete(`/question/delete/${id}`);
    }
}

export default new question();