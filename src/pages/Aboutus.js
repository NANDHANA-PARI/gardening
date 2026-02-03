import i2 from "../i2.jpeg";
   // image inside src/
function Aboutus() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-top">

          {/* IMAGE */}
          <div className="about-image">
            <img src={i2} alt="About us" />
          </div>

          {/* TEXT */}
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              We create beautiful, healthy, and sustainable green spaces using
              expert gardening and modern techniques. From design to maintenance,
              we help your garden thrive while nurturing lasting beauty and
              freshness in every space.
            </p>
            <p>
              Our focus on quality, care, and sustainability ensures gardens
              that grow naturally and inspire every day.
            </p>
          </div>

        </div>

        {/* FEATURES */}
        <div className="about-features">
          <div className="feature-card">🚚 Free delivery<br />on all orders</div>
          <div className="feature-card">🎁 Offers and gifts<br />on all orders</div>
          <div className="feature-card">🔒 Secure payments<br />protected by paypal</div>
          <div className="feature-card">🔄 10 days returns<br />moneyback garantee</div>
        </div>

      </div>
    </section>
  );
}

export default Aboutus;