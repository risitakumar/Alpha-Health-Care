import React, { useState } from "react";
import { AddAppoint } from "../MyComponents/AddAppoint";
import { Appointments } from "../MyComponents/Appointments";

export function NewAppointment() {
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
    <div>
      <AddAppoint addAppoint={addAppoint} />
      <Appointments appointments={appointments} onSubmit={onSubmit} />
    </div>
  );
}
