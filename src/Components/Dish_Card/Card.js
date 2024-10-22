import "../Dish_Card/Card.css"
import Delivery_Icon from "../../Sources/Images/delivery.png"

export default function Card (props) {
    return (
      <div className="Card">
        <img className="Card_image" src={props.image} alt={props.name}/>
        <div className="Card_details">
          <div className="name_price">
          <h1 className="dish_name"> {props.name} </h1>
          <h1 className="dish_price"> {props.price} </h1>
          </div>
          <p className="description">{props.description}</p>
          <button className="order_delivery_button">
              Order a delivery
              <img className="delivery_icon" src={Delivery_Icon} />
          </button>
        </div>
      </div>
    );
  };