import axios from "../../utill/axios";

class getsubscription {

    list(data) {
        return axios.get( '/subscription/getsubscription', { params: data });
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
export default new getsubscription();