import "./Description.css"
import Button from "../Button/Button"

export default function Description () {
    return (
      <div className="Descripton">
        <h1>Little Lemon</h1>
        <h2>Chigago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
        <Button to={"/Reserve a Table"} >Reserve a Table</Button>
      </div>
    );
  };