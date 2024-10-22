import "./Main.css"
import RestaurantFood from "../../../Sources/Images/restauranfood.jpg"
import Description from "../../../Components/Description/Description"


export default function Main () {
    return (
      <div className="Main_Home_Page">
        <Description />
        <img className="RestaurantFood" src={RestaurantFood} />
      </div>
    );
  };