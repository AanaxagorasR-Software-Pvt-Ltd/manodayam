import axios from "../../utill/axios";

class mastercategory {

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
        return axios.post( '/mastercategory/new', data);
    }
    delete(id) {
        return axios.delete(`/mastercategory/delete/${id}`);
    }
}

export default new mastercategory();