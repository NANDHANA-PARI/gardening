import services1 from "../images/services1.jpeg";
import services2 from "../images/services2.jpeg";
import services3 from "../images/services3.jpeg";
import { useCart } from "../context/CartContext";



function Services() {
       const { addToCart } = useCart();   
          
           return (
              <div className="container my-5"> 
                       <h2>Services</h2>
                   
                       <div className="row">
                         {[
                           ["Lawn Care & Maintainence",40, services1],
                           ["Planting,pruning & Garden Maintainence", 100, services2],
                           ["Landsscape Design & Installation", 500, services3],
                         ].map(([name, price, img]) => (
                           <div className="col" key={name}>
                             <div className="card">
                               <img src={img} className="card-img-top" alt={name} />
                               <div className="card-body text-center">
                                 <h5>{name}</h5>
                                 <p>₹{price}</p>
                                 <button
                                   className="btn btn-success"
                                   onClick={() => addToCart(name, price)}
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
  export default Services;
  