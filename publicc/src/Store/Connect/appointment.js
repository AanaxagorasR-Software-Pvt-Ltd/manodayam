import axios from "../../utill/axios";

class appointment {

    list(data) {
        return axios.get( '/', { params: data });
    }
    listBooked(data) {
        return axios.get('/booked', {parames: data});
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
    saveRoom(data) {
        return axios.post(`/appointments/saveroom`, data);
    }
    delete(id) {
        return axios.delete(`/appointments/delete/${id}`);
    }
}

export default new appointment();