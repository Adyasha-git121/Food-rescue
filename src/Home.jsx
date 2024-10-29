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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                excepturi inventore vitae cumque, consectetur maiores voluptates
                minima voluptas, quasi explicabo quod est corrupti quidem cum
                earum laudantium dolorum iure provident. Alias cupiditate autem
                voluptatibus est quasi nihil fugit excepturi ad eligendi,
                consequuntur, id optio porro illum incidunt perferendis.
                Corporis quaerat eum id, dicta temporibus doloribus architecto
                sunt iure quasi atque. hbchvwdfghwrbf bgfreyif34{" "}
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
                src="./images/donatefood.png"
                alt="home part is opened"
                width="500"
                height="300"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              excepturi inventore vitae cumque, consectetur maiores voluptates
              minima voluptas, quasi explicabo quod est corrupti quidem cum
              earum laudantium dolorum iure provident. Alias cupiditate autem
              voluptatibus est quasi nihil fugit excepturi ad eligendi,
              consequuntur, id optio porro illum incidunt perferendis. Corporis
              quaerat eum id, dicta temporibus doloribus architecto sunt iure
              quasi atque. hbchvwdfghwrbf bgfreyif34{" "}
            </p>
          </div>
          {/*Hero-images part*/}
          <div className="hero-images2">
            <img
              src="./images/needy.jpg"
              alt="home part is opened"
              width="200"
              height="200"
            />
            &nbsp; &nbsp;
            <img
              src="./images/home.jpg"
              alt="home part is opened"
              width="200"
              height="200"
            />
            <div className="">
              <Link to="/Donate">
                <button className="btn3">Donate Now</button>
              </Link>
              <Link to="/Volunteer">
                <button>Be a Volunteer</button>
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
