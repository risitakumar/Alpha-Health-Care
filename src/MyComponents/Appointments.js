import React from "react";
import { Appoint } from "../MyComponents/Appoint";

export const Appointments = (props) => {
  return (
    <div className="container">
      <h3 className="my-3 ">Appointment Booked</h3>
      {props.appointments.length === 0
        ? "Appointment Booked"
        : props.appointments.map((appoint) => {
            console.log(appoint.appointmentsid);
            return (
              <Appoint
                appoint={appoint}
                key={appoint.appointmentsid}
                onSubmit={props.onSubmit}
              />
            );
          })}
    </div>
  );
};
