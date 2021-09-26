import "./App.css";
import Header from "./MyComponents/Header";
import { Appointments } from "./MyComponents/Appointments";
import { AddAppoint } from "./MyComponents/AddAppoint";
import { LoginForm } from "./MyComponents/LoginForm";
import { RegistrationForm } from "./MyComponents/RegistrationForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewAppointment } from "./MyComponents/NewAppointment";

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

  const [appointments, setappointments] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/registrationform" component={RegistrationForm} />
          <Route exact path="/appointment" component={NewAppointment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
