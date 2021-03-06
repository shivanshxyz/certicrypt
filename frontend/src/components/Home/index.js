import { UploadDocument } from "../UploadDocument";
import React, { useState } from "react";

import { ValidateDocument } from "../ValidateDocument";

export const Home = () => {
  const [action, setAction] = useState(null);

  return (
    <div className="container">
      {!action && (
        <div className="full-content">
          <h3 className="title is-2 centered">CERTICRYPT</h3>
          <p className="subtitle is-5 centered">
            Certicrypt is an approach to solve the problem of broken system of the reputation of educational certificates in the Ed-Tech Industry.
          </p>
          <div className="columns">
            <div className="column">
              <button
                className="button action-button is-success is-large"
                onClick={() => setAction("upload")}
              >
                I want to issue certificates
              </button>
            </div>

            <div className="column">
              <button
                className="button action-button is-info is-large"
                onClick={() => setAction("validate")}
              >
                I want to validate certificates
              </button>
            </div>
          </div>
        </div>
      )}
      {action && (
        <div>
          <button className="button" onClick={() => setAction(null)}>
            ⟵ Go Back
          </button>
        </div>
      )}
      {action === "upload" && <UploadDocument />}
      {action === "validate" && <ValidateDocument />}
    </div>
  );
};
