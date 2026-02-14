import React, { useEffect, useState } from "react";

function PaymentMethod({ method, setMethod, setPaymentValid }) {
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const [upi, setUpi] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (method === "CARD") {
      const valid =
        card.number.length === 16 &&
        card.expiry &&
        card.cvv.length === 3 &&
        card.name;

      setPaymentValid(valid);
      setError(valid ? "" : "Enter valid card details");
    }

    else if (method === "UPI") {
      const valid = upi.trim().includes("@");
      setPaymentValid(valid);
      setError(valid ? "" : "Enter valid UPI ID");
    }

    else if (method === "COD") {
      setPaymentValid(true);
      setError("");
    }

    else {
      setPaymentValid(false);
      setError("");
    }
  }, [method, card, upi, setPaymentValid]);

  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3">Payment Method</h5>

      {/* OPTIONS */}
      {["CARD", "UPI", "COD"].map((opt) => (
        <div className="form-check mb-2" key={opt}>
          <input
            type="radio"
            className="form-check-input"
            name="payment"
            checked={method === opt}
            onChange={() => {
              setMethod(opt);
              setError("");
            }}
          />
          <label className="form-check-label">
{opt === "CARD" && (
  <>
    <i className="fa fa-credit-card"></i>
    <span className="ms-2">Card</span>
  </>
)}

{opt === "UPI" && (
  <>
    <i className="fa fa-exchange"></i>
    <span className="ms-2">UPI</span>
  </>
)}

{opt === "COD" && (
  <>
    <i className="fa fa-inr"></i>
    <span className="ms-2">Cash on Delivery</span>
  </>
)}


          </label>
        </div>
      ))}

      {/* CARD */}
      {method === "CARD" && (
        <div className="border rounded p-3 mt-3">
          <input
            className="form-control mb-2"
            placeholder="Card Number"
            maxLength={16}
            onChange={(e) => setCard({ ...card, number: e.target.value })}
          />

          <div className="d-flex gap-2">
            <input
              className="form-control"
              placeholder="MM/YY"
              onChange={(e) => setCard({ ...card, expiry: e.target.value })}
            />
            <input
              className="form-control"
              placeholder="CVV"
              maxLength={3}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
            />
          </div>

          <input
            className="form-control mt-2"
            placeholder="Card Holder Name"
            onChange={(e) => setCard({ ...card, name: e.target.value })}
          />
        </div>
      )}

      {/* UPI */}
      {method === "UPI" && (
        <input
          className="form-control mt-3"
          placeholder="example@upi"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
        />
      )}

      {/* COD */}
      {method === "COD" && (
        <div className="alert alert-info mt-3">
          Pay when your order arrives
        </div>
      )}

      {/* ERROR */}
      {error && (
        <small className="text-danger d-block mt-2">
          {error}
        </small>
      )}
    </div>
  );
}

export default PaymentMethod;
