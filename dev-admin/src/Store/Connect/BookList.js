import axios from "../../utill/axios";

class BookList {

    list(data) {
        return axios.get('/', { params: data });
    }
    listBooked(data) {
        return axios.get('/Booked', { parames: data });
    }
    listAll() {
        return axios.get("/all");
    }
    listAllIgnoreStatus() {
        return axios.get("/all/ignore-status");
    }
    save(data) {
        return axios.post('subscription/appoint', data);
    }
    saveRoom(data) {
        return axios.post(`/subscription/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/subscription/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/subscription/delete/${id}`);
    }
    status(data) {
        return axios.post(`/subscription/status`, data);

    }
    // booked(){
    //     return axios.get(`/booked/appointments/booked`)

    // }
}

export default new BookList();