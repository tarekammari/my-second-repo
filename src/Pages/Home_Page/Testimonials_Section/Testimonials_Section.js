import "./Testimonials_Section.css";
import Reviews from "../../../Data/Reviews";

import Testimonials_Cards from "../../../Components/Testimonials_Card/Testimonials_Card";


const container11 = document.querySelector('.Testimonials_Cards');
container11.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    container11.scrollLeft += event.deltaY; // Use deltaY for horizontal scroll
  }
});

const container = document.querySelector('.Testimonials_Cards');

let isDown = false;
let startX;
let scrollLeft;

// Mouse Down Event
container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active'); // Optional: add a class when dragging
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

// Mouse Leave Event
container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active'); // Remove active class on stop dragging
});

// Mouse Up Event
container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

// Mouse Move Event
container.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop the function if mouse isn't clicked
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Multiplied by 2 for faster scrolling
  container.scrollLeft = scrollLeft - walk;
});



export default function Testimonials_Section () {
    return (
      <div className="Testimonials_Section">
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