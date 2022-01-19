import axios from "../../utill/axios";

class library {

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
        return axios.post( '/library/media', data);
    }
    delete(id) {
        return axios.delete(`/library/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/library/media',data)

    // }
    


    
}

export default new library();