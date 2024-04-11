import one from "../assest/images/one.jpg"
import two from "../assest/images/two.jpg"
import three from "../assest/images/three.jpg"
function Product() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt='Fogg Wood Extreme'></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div className="box">
          <img src={three} alt="Fogg Wood Extreme"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={two} alt="Fogg Wood Extreme"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }
  export default Product