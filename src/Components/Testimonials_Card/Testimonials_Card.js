import "../Testimonials_Card/Testimonials_Card.css"
import Starts from "../../Sources/Images/Gold_start.png"

export default function Testimonials_Card (props) {
    return (
      <div className="Testimonials_Card">
        <div className="Starts">
            <img id="Start_1" src={Starts} alt=""/>
            <img id="Start_2" src={Starts} alt=""/>
            <img id="Start_3" src={Starts} alt=""/>
            <img id="Start_4" src={Starts} alt=""/>
            <img id="Start_5" src={Starts} alt=""/>
        </div>
        <h2 className="review_title" > {props.review_title} </h2>
        <p className="review_body" > {props.review_body} </p>
        <h3 className="reviewer_name" > {props.reviewer_name} </h3>
        <text className="date" type="date"> {props.date} </text>
        <img className="reviewer_image" src={props.reviewer_image} alt="" />        
      </div>
    );
  };