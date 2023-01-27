import "./Card.css";

const Card = (props) => {
  return (
    <div className="productCard">
      <img src={props.data.image} alt={props.data.product}></img>
      <div className="data">
        <span>
          <p className="product-name">{props.data.product}</p>
          <p>{props.data.category}</p>
        </span>
        <p className="product-price">$ {props.data.price}</p>
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  product: [],
};
