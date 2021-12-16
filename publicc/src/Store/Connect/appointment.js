import axios from "../../utill/axios";

class appointment {

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
        return axios.post( 'appointments/appoint', data);
    }
    delete(id) {
        return axios.delete(`/appointments/delete/${id}`);
    }
}

export default new appointment();