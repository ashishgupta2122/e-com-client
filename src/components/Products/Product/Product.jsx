import { useNavigate } from "react-router-dom";
import "./Product.scss";

//import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        {data.img && data.img.data && data.img.data[0] ? (
          <img
            src={
              process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
            }
            alt=""
          />
        ) : (
          <img src="/path/to/placeholder-image.png" alt="Placeholder" />
        )}
      </div>

      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
