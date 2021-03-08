import React, { Component } from "react";
import FileUploader from "./../FileUploader";

export const UploadDocument = () => {
  const cb = (data) => {
    console.log("upload", data);
  };
  return (
    <div className="container doc-section">
      <h3 className="title is-3">Issue new certificate</h3>
      <p>Upload your certificate below to record it on Tezos.</p>
      <FileUploader
        hint="Upload new document"
        type="register"
        successCallback={cb}
      />
    </div>
  );
};
