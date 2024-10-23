import "./About_Section.css";
import About_Data from "../../../Data/About_Description";

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
</div>


    );
  };