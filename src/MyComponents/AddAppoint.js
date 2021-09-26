import React, { useState } from "react";
import { Appointments } from "../MyComponents/Appointments";

export const AddAppoint = ({ addAppoint }) => {
  const [appointmentdept, setappointmentdept] = useState("");
  const [patientname, setpatientname] = useState("");
  const [patientage, setpatientage] = useState("");
  const [patientgender, setpatientgender] = useState("");
  const [patientailmentdesc, setpatientailmentdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (
      !appointmentdept ||
      !patientname ||
      !patientage ||
      !patientgender ||
      !patientailmentdesc
    ) {
      alert("Form space cannot be blank, Please fill all the details");
    } else {
      addAppoint(
        appointmentdept,
        patientname,
        patientage,
        patientgender,
        patientailmentdesc
      );
      setappointmentdept("");
      setpatientname("");
      setpatientage("");
      setpatientgender("");
      setpatientailmentdesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "5%",
        }}
      >
        Book your appointment by entering your details{" "}
      </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="appointmentdept" className="form-label">
            Appointment Department
          </label>
          <input
            type="text"
            value={appointmentdept}
            onChange={(e) => setappointmentdept(e.target.value)}
            className="form-control"
            id="appointmentdept"
            aria-describedby="deptHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patientname" className="form-label">
            Patient Name
          </label>
          <input
            type="text"
            value={patientname}
            onChange={(e) => setpatientname(e.target.value)}
            className="form-control"
            id="exampleInputpatientname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patientage" className="form-label">
            Patient Age
          </label>
          <input
            type="number"
            value={patientage}
            onChange={(e) => setpatientage(e.target.value)}
            className="form-control"
            id="exampleInputpatientage"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patientgender" className="form-label">
            Patient Gender
          </label>
          <input
            type="text"
            value={patientgender}
            onChange={(e) => setpatientgender(e.target.value)}
            className="form-control"
            id="exampleInputpatientgender"
          />
        </div>
        <div className="mb-3">
          <label htmlFor=" patientailmentdesc" className="form-label">
            Patient Ailment Description
          </label>
          <input
            type="text"
            value={patientailmentdesc}
            onChange={(e) => setpatientailmentdesc(e.target.value)}
            className="form-control"
            id=" patientailmentdesc"
            aria-describedby="descHelp"
          />
          <div id="descHelp" className="form-text">
            We will never share your personal details with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
