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
  <div className="feature-card">
    <i className="bi bi-truck feature-icon"></i>
    <div className="feature-text">
      <strong>Free delivery</strong>
      <span>on all orders</span>
    </div>
  </div>

  <div className="feature-card">
    <i className="bi bi-gift feature-icon"></i>
    <div className="feature-text">
      <strong>Offers and gifts</strong>
      <span>on all orders</span>
    </div>
  </div>

  <div className="feature-card">
    <i className="bi bi-credit-card feature-icon"></i>
    <div className="feature-text">
      <strong>Secure payments</strong>
      <span>protected by PayPal</span>
    </div>
  </div>

  <div className="feature-card">
    <i className="bi bi-arrow-repeat feature-icon"></i>
    <div className="feature-text">
      <strong>10 days returns</strong>
      <span>moneyback guarantee</span>
    </div>
  </div>
</div>
</div>

    </section>
  );
}

export default Aboutus;