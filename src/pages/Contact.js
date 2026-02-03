

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Not sure what you need? <br />
            We will be happy to listen to you <br />
            and suggest ideas you hadn’t considered.
          </p>

          <ul>
            <li>📧 gardentales@gmail.com</li>
            <li>📞 +91-8907656789</li>
            <li>📍 Bangalore, India</li>
          </ul>

          <button className="btn-primary">Book Now</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <form>

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="First Name" />
              </div>

              <div className="form-group">
                <label>Number</label>
                <input type="text" placeholder="Number" />
              </div>
            </div>

            <div className="form-group full">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-group full">
              <label>How can we help you?</label>
              <textarea placeholder="Enter your message here"></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
