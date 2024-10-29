import "./Testimonials_Section.css";
import Reviews from "../../../Data/Reviews";

import Testimonials_Cards from "../../../Components/Testimonials_Card/Testimonials_Card";

export default function Testimonials_Section () {
    return (
      <div id="Testimonials_Section" className="Testimonials_Section">
        <h2 className="Section_title">Testimonials</h2>
        <div className="Testimonials_Cards">
        {Reviews.map((review, index) => (
          <Testimonials_Cards
            key={index}
            review_title={review.review_title}
            review_body={review.review_body}
            reviewer_name={review.reviewer_name}
            date={review.date}
            reviewer_image={review.reviewer_image}
            />
          ))}
        </div>        
      </div>
    );
  };