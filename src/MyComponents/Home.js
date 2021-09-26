import home from "../home.jpg";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />

      <div class="img-wrapper">
        <img src={home} className="img-responsive" alt="home" />
        <div class="img-overlay">
          <button Link="/app" className="btn btn-md btn-primary">
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

export default App;
