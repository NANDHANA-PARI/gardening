import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="container text-center my-5">
      <h1>✅</h1>
      <h1>Payment Successful</h1>
      <p>Your order has been placed successfully</p>
      <Link to="/" className="btn btn-success mt-3">
        Continue Shopping
      </Link>
    </div>
  );
}

export default PaymentSuccess;
