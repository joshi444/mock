import React, { useState, useEffect } from "react";
import "./Program.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Programs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/b4b9085e-6dc8-4bfa-9ca4-0a9d8d872e01")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="Programs">
      {data.map((program, index) => (
        <div className="program" key={index}>
            <img src= {program.img} alt="logo" />
            <h4>{program.headig}</h4>
         
        </div>
      ))}
    </div>
    </div>
  );
}

export default Programs;
