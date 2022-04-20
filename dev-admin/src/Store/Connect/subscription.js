import axios from "../../utill/axios";

class subscription {

    list(data) {
        return axios.get( '/list', { params: data });
    }
    listAll() {
        return axios.get( "/all");
    }
    listAllIgnoreStatus() {
        return axios.get( "/all/ignore-status");
    }
    save(data) {
        return axios.post( '/subscription/sub', data);
    }
    delete(id) {
        return axios.delete(`/subscription/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/video/media',data)

    // }
    


    
}
export default new subscription();