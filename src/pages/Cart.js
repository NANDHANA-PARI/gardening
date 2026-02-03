import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between border p-3 my-2"
            >
              <div>
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
              </div>

              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </button>

                <span className="mx-3">{item.quantity}</span>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() => increaseQuantity(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h4 className="mt-4">Total: ₹{total}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
