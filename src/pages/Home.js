import { useNavigate, Link } from "react-router-dom";
import i1 from "../i1.jpeg";
import plastic4 from "../images/plastic4.jpeg";
import indoor1 from "../images/indoor1.jpeg";
import green1 from "../images/green1.jpeg";
import green2 from "../images/green2.jpeg";


import { FaGlobeAmericas, FaUserCheck, FaSeedling, FaHeart } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${i1})` }}
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
            className="shop-btn"
            onClick={() => navigate("/plants/indoorplants")}
          >
            Shop Now
          </button>
        </div>
      </section>
     <section className="why-section">
  <div className="container">
    <h1>Why Choose Us?</h1>

    <p className="why-text">
      We’re a gardening company focused on making green living easy for every home.
      From quality plants to smart gardening solutions, we help homes grow healthier , happier spaces with nature at the center.

    we help homes grow greener with quality plants,expert care,and sustainable gardening solutions.</p>

    <div className="why-grid">
      <div className="why-card">
        <FaGlobeAmericas className="why-icon" />
        <p>Eco-Friendly</p>
      </div>

      <div className="why-card">
        <FaUserCheck className="why-icon" />
        <p>Expert Care</p>
      </div>

      <div className="why-card">
        <FaSeedling className="why-icon" />
        <p>Plant care support</p>
      </div>

      <div className="why-card">
        <FaHeart className="why-icon" />
        <p>Quality Products</p>
      </div>
    </div>
  </div>
</section>
<section className="deal-strip">
  <img
    src={require("../images/green4.png")}
    alt="plant"
    className="deal-img left"
  />

  <div className="deal-content">
    <h2>Special Green Deals</h2>
    <button
      className="btn btn-light rounded-pill px-4 py-2"
      onClick={() => navigate("/plants/Indoorplants")}
    >
      Shop Now
    </button>
  </div>

  <img
    src={require("../images/green4.png")}
    alt="plant"
    className="deal-img right"
  />
</section>


      <section className="offer-section">
        <h2 className="offer-title">What we offer?</h2>

        <div className="offer-grid">

          <Link to="/plants/indoorplants">
            <div className="offer-card">
              <img src={indoor1} alt="Plants" />
              <div className="overlay">
                <h3>Plants</h3>
                <p>Upto <b>60% off</b></p>
              </div>
            </div>
          </Link>

          <Link to="/pots/ceramicpots">
            <div className="offer-card">
              <img src={plastic4} alt="Pots" />
              <div className="overlay">
                <h3>Pots</h3>
                <p>Upto <b>40% off</b></p>
              </div>
            </div>
          </Link>

          <Link to="/seeds/flowerseeds">
            <div className="offer-card">
              <img src={green1} alt="Seeds" />
              <div className="overlay">
                <h3>Seeds</h3>
                <p>Upto <b>10% off</b></p>
              </div>
            </div>
          </Link>

          <Link to="/services">
            <div className="offer-card">
              <img src={green2} alt="Services" />
              <div className="overlay">
                <h3>Services</h3>
                <p>Upto <b>30% off</b></p>
              </div>
            </div>
          </Link>

        </div>
      </section>
      <section class="testimonial-section">
  <h2>What Our Customers Say?</h2>

  <div class="testimonial-container">
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="title">“My balcony finally feels alive!”</p>
      <p class="text">
        The plants arrived fresh and healthy, and the care tips really
        helped me maintain them easily
      </p>
      <span class="name">- Ananya R</span>
    </div>

    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="title">“Beautiful quality & great service.”</p>
      <p class="text">
        The pots and plants look amazing in my home.
        Definitely my go-to place for greenery.
      </p>
      <span class="name">- Sneha M</span>
    </div>

    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="title">“Perfect for home gardens.”</p>
      <p class="text">
        I’m new to gardening, but the care tips made it
        super easy to maintain my plants.
      </p>
      <span class="name">- Arjun K</span>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
