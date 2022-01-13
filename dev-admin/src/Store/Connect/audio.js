import axios from "../../utill/axios";

class audio {

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
        return axios.post( '/audios/media', data);
    }
    delete(id) {
        return axios.delete(`/audios/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/video/media',data)

    // }
    


    
}

export default new audio();