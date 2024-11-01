import { Link } from "react-router-dom";

 


export default function Home() {
  return (
    <>
      <main>
        <section className="hero section">
          <div className="container-grid">
            <div className="para-container">
              <p>India's best food servicess for needy people</p>
              <h1>Annseva</h1>
              <p>
                AnnSeva is a platform dedicated to combating hunger and food waste. By connecting surplus food with those in need, we strive to create a more compassionate and sustainable society. Our mission is to serve humanity, one meal at a time. By joining us, you're not just donating food; you're nourishing lives and contributing to a better future for all.{" "}
<br/> <br/>  
                <h3>Together, we can make a difference.</h3>
                Let's build a hunger-free world, one act of kindness at a time.
                Join us in our mission to spread love and compassion through food.
                Your small contribution can make a big impact.
                Let's feed the hungry and build a brighter future.
               <br/><br/>
                <h3>so signup here..</h3>
              </p>
              <div className="button-grp">
                <Link to="/Signup">
                  <button className="btn1">SignUp Now</button>
                </Link>
              </div>
            </div>
            {/*Hero-images part*/}
            <div className="hero-images">
              <img
                src="./images/home.jpeg"
                alt="home part is opened"
                width="380"
                height="370"
              />
            </div>
          </div>
        </section>
      </main>
      <br></br> <br></br> <br></br>
      {/*second part*/}
      <section className="description">
        <div className="container-grid2">
          <div className="para-container2">
            <h3 className="h2">||How it works||</h3>
            <br></br>
            <p>
            AnnSeva is a user-friendly platform designed to simplify the process of food donation and distribution. Here's how it works:

For Food Donors:

Sign Up: Create an account on our platform.
List Your Surplus: Specify the type, quantity, and pickup location of the food you'd like to donate.
Connect with Volunteers: Our platform will match you with nearby volunteers who can pick up the food.
For Volunteers:

Sign Up: Create an account on our platform.
Volunteer: Express your interest in volunteering to deliver food.
Receive Notifications: Receive notifications about food donation requests in your area.
Pick Up and Deliver: Collect the food from donors and deliver it to those in need.
Our platform ensures a seamless experience for both donors and volunteers, making it easy to contribute to a more compassionate and food-secure community.{" "}
            </p>
          </div>
          {/*Hero-images part*/}
          <div className="hero-images2">
            <img
              src="./images/donate2.jpg"
              alt="home part is opened"
              width="250"
              height="200"
            />
            &nbsp; &nbsp;
            <img
              src="./images/volunteer.jpeg"
              alt="home part is opened"
              width="250"
              height="200"
            />
            <div className="">
              <Link to="/Donate">
                <button className="btn3">Donate Now</button>
              </Link>
              <Link to="/Registration">
                <button className="volbtn" >Be a Volunteer</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      &nbsp; &nbsp;
      {/*last part*/}
      <section className="section-analytics">
        <div className="container-grid3">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered organisations</p>
          </div>
          <br></br>
          <div className="div1">
            <h2>100,00</h2>
            <p>Happy people</p>
          </div>
          <br></br>
          <div className="div1">
            <h2>500+</h2>
            <p>Resources</p>
          </div>
          <br></br>
          <div className="div1">
            <h2>24/7</h2>
            <p>services availale</p>
          </div>
          <br></br>
        </div>
      </section>
    </>
  );
}
