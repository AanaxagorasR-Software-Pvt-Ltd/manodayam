import axios from "../../utill/axios";

class voiceAssessmentQuestion {

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
        return axios.post( '/voice-assessment-question/new', data);
    }
    delete(id) {
        return axios.delete(`/voice-assessment-question/delete/${id}`);
    }
}

export default new voiceAssessmentQuestion();