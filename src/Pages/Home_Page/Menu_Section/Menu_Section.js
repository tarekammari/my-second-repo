import "../Menu_Section/Menu_Section.css"
import Card from "../../../Components/Dish_Card/Card";
import Data from "../../../Data/Data";
import Button from "../../../Components/Button/Button";

export default function Menu_Section () {
    return (
      <div className="Menu_Section">
        <div className="Section_header">
          <h2 className="Section_title">This weeks specials!</h2>
          <Button >Menu</Button>
        </div>
        <div className="dishes_cards">
        {Data.map((dish, index) => (
          <Card
            key={index}
            name={dish.name}
            price={dish.price}
            image={dish.image}
            description={dish.description}
            />
          ))}
        </div>
      </div>
    );
  };