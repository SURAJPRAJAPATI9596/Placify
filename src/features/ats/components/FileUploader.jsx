import React, { useState } from "react";
import Button from "@mui/material/Button";
const FileUploader = ({ setSelectedFile }) => {
  const [file, setFile] = useState(null);
  return (
    <div className="p-6 rounded-xl border bg-(--bg-primary) text-(--text-primary) text-center ">
      <h2 className="text-2xl font-bold mb-5">Upload Resume</h2>

      <div
        className="h-48 border-2 border-dashed border-blue-500 
            rounded-xl flex flex-col items-center justify-center"
        onDragOver={(e) => {
          e.preventDefault();
          //        console.log(e);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          //          console.log(e);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedFile(e.dataTransfer.files[0]);
        }}
      >
        {file ? (
          <p className="text-lg text-green-700">Thanks! We got resume</p>
        ) : (
          <p className="text-lg">📄 Drag & Drop your resume</p>
        )}

        <p className="my-3 opacity-70">or</p>

        {file ? (
          <Button variant="contained" color="success">
            Success
          </Button>
        ) : (
          <label
            className="
              bg-blue-600 text-white px-6 py-2 
              rounded-lg cursor-pointer"
          >
            Choose File
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setSelectedFile(e.target.files[0]);
              }}
            />
          </label>
        )}

        <p className="mt-3 text-sm">PDF / DOCX only</p>
      </div>
    </div>
  );
};

export default FileUploader;
