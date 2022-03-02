import axios from "../../utill/axios";

class libraryGroup {

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
        return axios.post('library-group/appoint', data);
    }
    saveRoom(data) {
        return axios.post(`/library-group/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/library-group/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/library-group/delete/${id}`);
    }
    status(data) {
        return axios.post(`/library-group/status`, data);
    }
    // booked(){
    //     return axios.get(`/booked/appointments/booked`)

    // }
}

export default new libraryGroup();