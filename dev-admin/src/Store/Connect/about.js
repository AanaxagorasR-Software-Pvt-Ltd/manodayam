
import axios from "../../utill/axios";

class about {

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
        return axios.post( '/about/media', data);
    }
    delete(id) {
        return axios.delete(`/about/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/about/media',data)

    // }
    


    
}

export default new about();