import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Volunteer from "./Volunteer";
export default function Registration() {
    let [volunteer,setVolunteer] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        address:"",
        photo:"",
});

let Navigate = useNavigate();

let handleInput = (event) =>{
    console.log(event.target.value); //it gives letter 
    let name = event.target.name;
    let value = event.target.value;

    setVolunteer({
        ...volunteer,
        [name]: value,

    });
}
const handleSubmit=(e)=>{
    e.preventDefault();
    Navigate("/Volunteer");
    alert("registered succesfully");

}


    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container-grid ">
                        <div className="registration-image">
                        <img src="./images/redg.jpg" 
                                width="500" height="500"
                            /> 
                        </div>
                        {/* let tackle the form*/}
                        <div className="form">
                            <h2 className="main-heading mb-3"> Volunteer registration Form </h2>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlfor="username">Username</label>
                                    <input
                                        type="text"
                                        value={Volunteer.username}
                                        onChange={handleInput}
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off" />
                                </div>
                                <div>
                                    <label htmlfor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required
                                        autoComplete="off" 
                                        value={volunteer.email}
                                        onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlfor="phone">phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="enter your number"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={volunteer.phone}
                                        onChange={handleInput} 
                                        />
                                </div>
                                <div>
                                    <label htmlfor="password">password</label>
                                    <input
                                        type="text"
                                        name="password"
                                        placeholder="enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={volunteer.password}
                                        onChange={handleInput} 
                                        />
                                </div>
                                <div>
                                    <label htmlfor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="enter your address"
                                        id="address"
                                        required
                                        autoComplete="off"
                                        value={volunteer.address}
                                        onChange={handleInput} 
                                        />
                                </div>
                                <div>
                                    <label htmlfor="photo">Photo</label>
                                    <input
                                   
                                    type="file"
                                    name="photo"
                                    placeholder="photo"
                                    id="photo"
                                    required
                                    autoComplete="off"
                                    value={volunteer.photo}
                                    onChange={handleInput} 
                                        />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>

        
    );
}