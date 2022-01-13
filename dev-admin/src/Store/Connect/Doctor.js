import axios from "../../utill/axios";

class doctor {

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
        return axios.post( '/doctors', data);
    }
    delete(id) {
        return axios.delete(`/doctors/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/video/media',data)

    // }
    


    
}

export default new doctor();