import axios from "../../utill/axios";

class voicechat {
  list(data) {
    return axios.get("/", { params: data });
  }
  listAll() {
    return axios.get("/all");
  }
  listAllIgnoreStatus() {
    return axios.get("/all/ignore-status");
  }
  save(data) {
    return axios.post("/voicechat", data);
  }
  delete(id) {
    return axios.delete(`/voicechat/delete/${id}`);
  }
  // update(data){
  //     return  axios.put('/library/media',data)

  // }
}

export default new voicechat();
