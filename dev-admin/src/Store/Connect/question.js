import axios from "../../utill/axios";

class question {

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
        return axios.post( 'questions/mcq', data);
    }
    saveRoom(data) {
        return axios.post(`/questions/saveroom`, data);
    }
    saveCallStatus(data) {
        return axios.post(`/questions/changecallstatus`, data);
    }
    delete(id) {
        return axios.delete(`/questions/delete/${id}`);
    }
}

export default new question();