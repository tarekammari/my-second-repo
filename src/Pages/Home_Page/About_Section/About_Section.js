import "./About_Section.css";
import About_Data from "../../../Data/About_Description";
import Mario_b from "../../../Sources/Images/Mario and Adrian b.jpg"
import Mario_A from "../../../Sources/Images/Mario and Adrian A.jpg"

export default function About_Section () {
    return (
      <div className="About_Section" id="About_Section">
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
          <img className="Restaurant_Chef" src={Mario_A} alt="#"/>
          <img className="Restaurant" src={Mario_b} alt="#"/>
        </div>
      </div>
    );
  };