import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Donate.css";
import "leaflet/dist/leaflet.css";
import useGeoloaction from "./useGeoloaction";
import axios from "axios";

function Donate() {
  const ZOOM_LEVEL = 13;
  const location = useGeoloaction();
  const mapRef = useRef();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  //form submit
  const [inputdata, setData] = useState({
    Name: "",
    Contact: "",
    Address: "",
    Items: "",
    Quantity: "",
    Additionalinfo: "",
    Latitude:"",
    Longitude:""
  });

  function handlesubmit(event){
    event.preventDefault()
    axios.post('http://localhost:3010/user',inputdata)
    .then(res =>{
      alert("Request submited");
    }).catch(err =>console.log(err));
  };

  return (
    <>
      <div className="wrapper">
        <form className="donateform" onSubmit={handlesubmit}>
          <h2>Donate</h2>
          <br />
          <div className="name">
            Name:
            <input type="text" placeholder="Name" id="nameid" 
            onChange={e => setData({...inputdata,Name:e.target.value })}/>
          </div>
          <div className="address">
            Address:
            <input type="text" placeholder="Type Address" id="addressid" 
            onChange={e => setData({...inputdata,Address:e.target.value })}/>
          </div>
          <div className="items">
            Items:
            <input type="text" placeholder="Item name" id="itemsid" 
            onChange={e => setData({...inputdata,Items:e.target.value })}/>
          </div>
          <div className="quantity">
            Quantity:
            <input type="number" placeholder="Item Quantity" id="quantityid" 
            onChange={e => setData({...inputdata,Quantity:e.target.value })}/>
          </div>
          <div className="contact">
            Contact:
            <input type="number" placeholder="Contact number" id="contactid"
            onChange={e => setData({...inputdata,Contact:e.target.value })} />
          </div>
          <div className="information">
            Additional Information:<br></br>
            <textarea
              placeholder="Information for volunteer"
              id="informationid"
              onChange={e => setData({...inputdata,Additionalinfo:e.target.value })}
            />
          </div>
          <input type="submit" value="Submit" className="submitbtn" />
        </form>

        <MapContainer
          className="maparea"
          center={[20.459815, 85.881194]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "350px", width: "500px" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              <Popup>You are here</Popup>
            </Marker>
          )}
        </MapContainer>
        <div className="locate-map-btn">
          <button onClick={showMyLocation}>
            <img src="./images/compass.png" alt="locate" height="50px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Donate;
