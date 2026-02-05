import indoor1 from "../images/indoor1.jpeg";
import indoor2 from "../images/indoor2.jpeg";
import indoor3 from "../images/indoor3.jpeg";
import indoor4 from "../images/indoor4.jpeg";
import { useCart } from "../context/CartContext";

function Indoorplants() {
  const { addToCart } = useCart();

  return (
    <div className="container my-5"> 
         <h2>Indoor plants</h2>
     
         <div className="row">
           {[
             ["China Plant", 500, indoor1],
             ["Watermelon Peperomia", 50, indoor2],
             ["petra Croton", 50, indoor3],
             ["Money Plant Variegated", 50, indoor4],
           ].map(([name, price, img]) => (
             <div className="col" key={name}>
               <div className="card">
                 <img src={img} className="card-img-top" alt={name} />
                 <div className="card-body text-center">
                   <h5>{name}</h5>
                   <p>₹{price}</p>
                   <button
                  className="btn btn-success"
                  onClick={() =>
                    addToCart({
                      name: name,
                      price: price
                    })
                  }
                >
                  Add to cart
                </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
     }
export default Indoorplants;
