import home from "./home.jpg";
import "./App.css";
import { Header } from "./MyComponents/Header";
import { Appointments } from "./MyComponents/Appointments";
import { AddAppoint } from "./MyComponents/AddAppoint";
import React, { useState, useEffect } from "react";

function App() {
  let initAppoint;
  if (localStorage.getItem("appointments") === null) {
    initAppoint = [];
  } else {
    initAppoint = JSON.parse(localStorage.getItem("appointments"));
  }
  const onSubmit = (appoint) => {
    console.log("Appointment Booked", appoint);

    setappointments(
      appointments.filter((e) => {
        return e !== appoint;
      })
    );
    localStorage.setItem("appointments", JSON.stringify(appointments));
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
    console.log(appointments.length, "Current Length")
    if (appointments.length === 0) {
      appointmentsid = Math.floor((Math.random() * 100) + 1);
      console.log(appointmentsid,"appointmentsidappointmentsid")
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

  const [appointments, setappointments] = useState([initAppoint]);
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <>
      <Header />
      <AddAppoint addAppoint={addAppoint} />
      <Appointments appointments={appointments} onSubmit={onSubmit} />
    </>
  );
}

export default App;
