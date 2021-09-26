import React from "react";

export const Appoint = ({ appoint, onSubmit }) => {
  return (
    <div>
      <h4>{appoint.appointmentsid}</h4>
      <p>{appoint.appointmentdept}</p>
      <p>{appoint.patientname}</p>
      <p>{appoint.patientage}</p>
      <p>{appoint.patientgender}</p>
      <p>{appoint.patientailmentdesc}</p>

      <button
        className="btn btn-sm btn-success"
        onClick={() => {
          onSubmit(appoint);
        }}
      >
        Click to confirm
      </button>
    </div>
  );
};
