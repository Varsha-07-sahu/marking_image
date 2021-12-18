// import http from "./http-comman";
import axios from "axios";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return axios.post("http://localhost:8080/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return axios.get("http://localhost:8080/files");
    }
}

export default new UploadFilesService();