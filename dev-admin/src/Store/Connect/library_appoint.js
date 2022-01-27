import axios from "../../utill/axios";

class library_appoint {

    list(data) {
        return axios.get('/library/library_appoint', { params: data });
    }
    listBooked(data) {
        return axios.get('/library/booked', { parames: data });
    }
    listAll() {
        return axios.get("/all");
    }
    listAllIgnoreStatus() {
        return axios.get("/all/ignore-status");
    }
    save(data) {
        return axios.post('library_appoint/appoint', data);
    }
    saveRoom(data) {
        return axios.post(`/library/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/library_appoint/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/library_appoint/delete/${id}`);
    }
    status(data) {
        return axios.post(`/library/status`, data);
    }
    // booked(){
    //     return axios.get(`/booked/appointments/booked`)

    // }
}

export default new library_appoint();