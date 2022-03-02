import axios from "../../utill/axios";

class library_appoint {

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
        return axios.post('library-singlecall/appoint', data);
    }
    saveRoom(data) {
        return axios.post(`/library-singlecall/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/library-singlecall/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/library-singlecall/delete/${id}`);
    }
    status(data) {
        return axios.post(`/library-singlecall/status`, data);
    }
    // booked(){
    //     return axios.get(`/booked/appointments/booked`)

    // }
}

export default new library_appoint();