import home from "../home.jpg";
import { AddAppoint } from "./AddAppoint";
import "./App.css";
import { Appointments } from "./Appointments";
import Header from "./Header";
import {useHistory} from 'react-router-dom'


export function Home() {
  const history = useHistory()
  return (
    <>
      <div class="img-wrapper">
        <img src={home} className="img-responsive" alt="home" />
        <div class="img-overlay">
          <button onClick={() => {history.push("/login")}} className="btn btn-md btn-primary">
            Book Appointments
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          Our doctors and healthcare services provide professional advice for
          your health issues.Alpha ensures the path to your quickest possible
          recovery.
        </div>
        <button className="btn btn-sm btn-success">Click to Know More!</button>
      </div>
    </>
  );
}

