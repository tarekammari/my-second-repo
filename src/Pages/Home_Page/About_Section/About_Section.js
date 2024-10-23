import "./About_Section.css";
import About_Data from "../../../Data/About_Description";
import Restaurant from "../../../Sources/Images/restaurant.jpg"
import Restaurant_Chef from "../../../Sources/Images/restaurant chef B.jpg"

export default function About_Section () {
    return (
      <div className="About_Section">
        <div className="About">
          {About_Data.map((about, index) => (
            <div key={index}>
              <h2 className="About_Title">{about.About_title}</h2>
              <p className="About_Adress">{about.About_Adress}</p>
              <p className="About_Description">{about.About_Description}</p>
            </div>
          ))}
        </div>
        <div className="About_images">
          <img className="Restaurant_Chef" src={Restaurant_Chef} alt="#"/>
          <img className="Restaurant" src={Restaurant} alt="#"/>
        </div>
      </div>
    );
  };