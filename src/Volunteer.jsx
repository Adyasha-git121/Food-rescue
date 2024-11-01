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
    axiosrgba(82, 71, 71, 0.2)
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

function handlemapview(userId){
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user by ID
    const fetchUserById = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3010/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError("User not found or error fetching data");
      }
    };

    fetchUserById(userId);
  }, [userId]);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;
  
};
  return (
    <>
      <div className="volbody">
        <div className="volunteerprofile">
          <div className="volpro"><h2>||Volunteer Profile||</h2></div>
          <div>
            <img
              src="./images/_MG_4020.jpg" alt="showing volunteer profile"
             width="150" height="170"
              className="volunteerimg"
            />
          </div>
          <div className="voldetails"> 
          Anuj Mishra
           <br />
              bibhtendu1920@gmail.com
            <br />
            7894284697
            <br />
            Address: Rajendra Nagar
            <div />
          </div>
          <div>
            <button  className="set-loc-btn">
            <Link to="/Volmaploc">Set Location</Link>
            </button>
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
                <th className="map-view">Map View</th>
              </tr>
            </thead>
            {/*table-uppper-heading*/}

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
                    >Decline
                    </button>
                  </td>
                  <td>

                    <button className="btnnn2">
                      <Link to="/Map">View</Link>
                    </button>

                    <Link className="btnnn"
                    to={{ pathname: "/Map", state: { latitude: d.Latitude,longitude: d.Longitude } }}>
                      View
                    </Link>
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
