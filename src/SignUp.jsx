import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    let [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
});

const Navigate = useNavigate();

const handleInput=(e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value,
    })

};
const handleSubmit=(e)=>{
    e.preventDefault();
    Navigate("/Home");
    alert("signed up succesfully");

}
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container-grid ">
                            <div className="registration-image">
                                <img src="./images/needy4.jpg" alt="the girl is trying to register"
                                    width="500" height="400"
                                />
                            </div>
                            {/* let tackle the form*/}
                            <div className="form">
                                <h1 className="main-heading mb-3">Form </h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label html for="username">Username</label>
                                        <input
                                            type="text"
                                            value={user.username}
                                            onChange={handleInput}
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off" />
                                    </div>
                                    <div>
                                        <label html for="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="enter your email"
                                            id="email"
                                            required
                                            autoComplete="off" 
                                            value={user.email}
                                            onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label html for="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="enter your number"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput} 
                                            />
                                    </div>
                                    <div>
                                        <label html for="password">password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="enter your password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
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