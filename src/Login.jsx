import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
    let [user,setUser] = useState({
        username:"",
        password:"",
    });

    let handleInput = (event) =>{
        console.log(event.target.value); //it gives letter 
        let name = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [name]: value,

        });
    }

    let handleSubmit =(event) =>{
        event.preventDefault();
        alert(user);
    };



    return (
       <>
       
     <section>
        <main>
            <div className="section-registration">
                <div className="container-login">
                    <div className="photo-login">
                    <img src="./images/needy2.jpg" alt="the girl is trying to login"
                                    width="500" height="450"
                                />
                    </div>
                    <div className="main-form">
                        <h1 className="heading">Login</h1>
                        <form className="form">
                            <div>
                                <label html for="username">Username</label>
                                    <input type="text"
                                    name="username"
                                    placeholder="username"
                                     id="username"
                                     required
                                    autoComplete="off" 
                                    onChange={handleInput}
                                    value={user.username}/>
                            </div>
                            <div>
                                <label html for="password">Password</label>
                                    <input type="text"
                                    name="password"
                                    placeholder="Password"
                                     id="password"
                                     required
                                    autoComplete="off" 
                                    onChange={handleInput}
                                    value={user.password}/>
                                   
                            </div>
                           
                            <a href="#"><p>Forgot password ?</p></a>
                            <button onClick={handleSubmit} className="btn-grp">Login</button>
                            <div className="div-last">
                                <p>Didn't have an account? <Link to="/Signup" >Signin</Link></p>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </main>
     </section>
       </>
    );
}