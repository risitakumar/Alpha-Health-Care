import home from "./home.jpg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Appointments } from "./MyComponents/Appointments";
import { AddAppoint } from "./MyComponents/AddAppoint";
import { LoginForm } from "./MyComponents/LoginForm";

import { Home } from "./MyComponents/Home";
import React, { useState } from "react";

function App() {
  const onSubmit = (appoint) => {
    console.log("Appointment Booked", appoint);

    setappointments(
      appointments.filter((e) => {
        return e !== appoint;
      })
    );
  };

  const addAppoint = (
    appointmentdept,
    patientname,
    patientage,
    patientgender,
    patientailmentdesc
  ) => {
    console.log(
      "Your details are submitted.",
      appointmentdept,
      patientname,
      patientage,
      patientgender,
      patientailmentdesc
    );
    let appointmentsid;
    if (appointments.length == 0) {
      appointmentsid = 0;
    } else {
      appointmentsid = appointments[appointments.length - 1].appointmentsid + 1;
    }

    const myAppoint = {
      appointmentsid: appointmentsid,
      appointmentdept: appointmentdept,
      patientname: patientname,
      patientage: patientage,
      patientgender: patientgender,
      patientailmentdesc: patientailmentdesc,
    };
    setappointments([...appointments, myAppoint]);
    console.log(myAppoint);
  };

  const [appointments, setappointments] = useState([]);
  return (
    <>
      <Header />

      <AddAppoint addAppoint={addAppoint} />
      <Appointments appointments={appointments} onSubmit={onSubmit} />
    </>
  );
}

export default App;
