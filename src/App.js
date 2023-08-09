import logo from "./logo.svg";
import "./App.css";
import { Tourdata } from "./data";
import { useState } from "react";

function App() {

  const[tour, setTour] = useState(Tourdata)

  const decline = (id) =>{
    const updatedelete = tour.filter(tours => tours.id !== id);
    setTour(updatedelete);
  }

  return (
    <div>
      <h1>Tour plan</h1>
      <hr></hr>
    <div className="container">
      {tour.map((tours) => (
        <div className="card" key={tours.id}>
          <img src={tours.img} alt="tour" />
          <div className="detail">
          <h5>{tours.name}</h5>
          <h6>${tours.price}</h6>
          </div>
          <span>{tours.about}</span>
          <button onClick={() => decline(tours.id)}>decline</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
