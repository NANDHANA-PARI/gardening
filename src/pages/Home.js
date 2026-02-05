import { useNavigate } from "react-router-dom";
import i1 from "../i1.jpeg";


function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${i1})`,
      }}
    >
      <div className="hero-content">
        <h1 className="home-title">
          <i>“Bringing Life to <br /> Every Corner”</i>
        </h1>

        <p className="home-page">
          Inspired by nature and built with care, helping you grow
          lush, sustainable gardens that flourish naturally.
        </p>

        <button
          className="btn btn-dark rounded-pill px-4 py-2"
           onClick={() => navigate("/plants/indoorplants")}        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Home;
