import axios from "../../utill/axios";

class subadmin {
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
    return axios.post("/subadmin/subadmin-roll", data);
  }
  delete(id) {
    return axios.delete(`/subadmin/delete/${id}`);
  }
}

export default new subadmin();
