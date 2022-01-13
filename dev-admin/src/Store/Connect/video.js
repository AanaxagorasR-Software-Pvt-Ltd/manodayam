import axios from "../../utill/axios";

class video {

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
        return axios.post( '/videos/media', data);
    }
    delete(id) {
        return axios.delete(`/videos/delete/${id}`);
    }
    // update(data){
    //     return  axios.put('/video/media',data)

    // }
    


    
}

export default new video();