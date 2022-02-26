import axios from "../../utill/axios";

class shakthiQues {
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
    return axios.post("/shakthi-ques/new", data);
  }
  delete(id) {
    return axios.delete(`/shakthi-ques/delete/${id}`);
  }
}

export default new shakthiQues();
