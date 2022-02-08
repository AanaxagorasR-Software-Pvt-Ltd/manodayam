import axios from "../../utill/axios";

class aboutCategory {

    list(data) {
        return axios.get( '/jfhkgvkfj/about_category', { params: data });
    }
    listAll() {
        return axios.get( "/all");
    }
    listAllIgnoreStatus() {
        return axios.get( "/all/ignore-status");
    }
    save(data) {
        return axios.post( '/aboutCategory/new', data);
    }
    delete(id) {
        return axios.delete(`/aboutCategory/delete/${id}`);
    }
}
export default new aboutCategory();