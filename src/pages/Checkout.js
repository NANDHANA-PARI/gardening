import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import PaymentMethod from "../components/PaymentMethod";

function Checkout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const [addressSaved, setAddressSaved] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentValid, setPaymentValid] = useState(false);

  const addressValid =
    address.name &&
    address.phone.length === 10 &&
    address.street &&
    address.city &&
    address.pincode.length === 6;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const saveAddress = () => {
    if (!addressValid) return;
    setAddressSaved(true);
  };

  const placeOrder = () => {
    if (!paymentValid) return;
    clearCart();
    navigate("/payment-success");
  };

  return (
    <div className="containers">
      <h2 className="checkout-title"> Secure Checkout</h2>

      {/* ADDRESS */}
      <div className="checkout-box">
        <h5>📍 Delivery Address</h5>

        <input className="form-control" name="name" placeholder="Full Name" onChange={handleChange} />
        <input className="form-control" name="phone" placeholder="Phone Number" maxLength={10} onChange={handleChange} />
        <input className="form-control" name="street" placeholder="Street Address" onChange={handleChange} />

        <div className="row">
          <input className="form-control" name="city" placeholder="City" onChange={handleChange} />
          <input className="form-control" name="pincode" placeholder="Pincode" maxLength={6} onChange={handleChange} />
        </div>

        {!addressSaved && (
          <>
            {!addressValid && <small className="error-text">Fill all address fields correctly</small>}
            <button className="btn-save" disabled={!addressValid} onClick={saveAddress}>
              Save Address & Continue
            </button>
          </>
        )}

        {addressSaved && <div className="success-msg">✅ Address saved successfully</div>}
      </div>

      {/* PAYMENT */}
      {addressSaved && (
        <div className="checkout-box">
          <PaymentMethod
            method={paymentMethod}
            setMethod={setPaymentMethod}
            setPaymentValid={setPaymentValid}
          />
        </div>
      )}

      {/* PLACE ORDER */}
      {addressSaved && paymentMethod && (
        <button
          className="btn-place"
          disabled={!paymentValid}
          onClick={placeOrder}
        >
          {paymentValid ? "Place Order" : "Complete payment details"}
        </button>
      )}
    </div>
  );
}

export default Checkout;
