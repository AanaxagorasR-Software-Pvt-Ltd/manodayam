import axios from "../../utill/axios";

class mediasolutions {

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
        return axios.post( '/media-solutions/new', data);
    }
    delete(id) {
        return axios.delete(`/media-solutions/delete/${id}`);
    }
}

export default new mediasolutions();