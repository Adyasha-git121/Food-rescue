import React, { useEffect, useState } from "react";
import "./volunteer.css";
import axios from "axios";
import Map from "./Map";
import { Link } from "react-router-dom";

function Volunteer() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3010/user").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  function handledecline(id) {
    axios
      .delete(`http://localhost:3010/user/${id}`)
      .then((res) => {
        alert("Declined request");
      })
      .catch((err) => console.log(err));
  }

  function handleaccept(id) {
    axios
      .delete(`http://localhost:3010/user/${id}`)
      .then((res) => {
        alert("Request Accepted");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="volbody">
        <div className="volunteerprofile">
          <div className="volpro">Volunteer Profile</div>
          <div>
            <img
              src="./images/_MG_4020.jpg"
              height="150px"
              className="volunteerimg"
            />
          </div>
          <div className="voldetails">
            Bibhutendu Paikaray
            <br />
            bibhtendu1920@gmail.com
            <br />
            7894284697
            <br />
            Address: Rajendra Nagar
            <div />
          </div>
          <div>
            <Link to="/Volmaploc">Set Location</Link>
          </div>
        </div>
        <div>
          <table className="table-content">
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th>Action</th>
                <th>Map View</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.Name}</td>
                  <td>{d.Contact}</td>
                  <td>{d.Address}</td>
                  <td>{d.Items}</td>
                  <td>{d.Quantity}</td>
                  <td>{d.Additionalinfo}</td>
                  <td>{d.Latitude}</td>
                  <td>{d.Longitude}</td> 

                  <td className="acceptdecline">
                    <button
                      onClick={(e) => handleaccept(d.id)}
                      className="btnnn"
                    >
                      <Link to="/Map" className="btnnn">Accept</Link>
                    </button>
                    <button
                      onClick={(e) => handledecline(d.id)}
                      className="btnnn"
                    >
                      Decline
                    </button>
                  </td>
                  <td>
                    <button className="btnnn">
                      <Link to="/Map">View</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
