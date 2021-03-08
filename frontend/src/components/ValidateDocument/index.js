import React, { Component, useState } from "react";
import FileUploader from "./../FileUploader";

export const ValidateDocument = () => {
  const [result, setResult] = useState(null);
  const cb = (data) => {
    console.log("validate", data);
    setResult(data);
  };
  return (
    <div className="container doc-section">
      <h3 className="title is-3">Validate the authenticity of the certificate</h3>
      <p>Upload your document below to check the authenticity of the certificate.</p>
      <FileUploader
        successCallback={cb}
        type="validate"
        hint="Validate existing document"
      />

      {result && (
        <div>
          {result.name && (
            <div>
              <p className="success">Congratulations !! This is a valid certificate</p>
              <p>Name: {result.name}</p>
              <p>Issued on: {result.uploaded}</p>
            </div>
          )}
          {!result.name && (
            <p className="error">Sorry !! Unfortunately, this is not a valid certificate as per our records.</p>
          )}
        </div>
      )}
    </div>
  );
};
