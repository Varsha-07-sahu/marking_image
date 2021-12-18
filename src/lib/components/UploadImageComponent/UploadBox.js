import React from "react";
import "./UploadBox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./upload_file_component";


function UploadBox() {
    return (
        <div className="container" style={{ width: "600px" }}>
            <div className="my-2">
                <h3>bezkoder.com</h3>
                <h4>React DropZone multiple Files upload</h4>
            </div>

            <UploadFiles />
        </div>
    );
}

export default UploadBox;