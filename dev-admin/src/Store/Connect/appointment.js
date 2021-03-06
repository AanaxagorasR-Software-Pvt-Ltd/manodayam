import axios from "../../utill/axios";

class appointment {

    list(data) {
        return axios.get('/', { params: data });
    }
    listBooked(data) {
        return axios.get('/booked', { parames: data });
    }
    listAll() {
        return axios.get("/all");
    }
    listAllIgnoreStatus() {
        return axios.get("/all/ignore-status");
    }
    save(data) {
        return axios.post('appointments/appoint', data);
    }
    saveRoom(data) {
        return axios.post(`/appointments/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/appointments/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/appointments/delete/${id}`);
    }
    status(data) {
        return axios.post(`/appointments/status`, data);

    }
    // booked(){
    //     return axios.get(`/booked/appointments/booked`)

    // }
}

export default new appointment();