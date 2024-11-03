import Nav from "../Home_Page/Nav_Section/Nav";
import Footer from "../Home_Page/Footer_Section/Footer"; 
import  Resterant from "../../Sources/Images/restaurant.jpg"
import  Resterant_Chef from "../../Sources/Images/restaurant chef B.jpg"
import Form from "../Reserve_Table/Form_Find_Table";
import "./Reserve_Table.css";

export default function Reserve_Table () {
    return (
        <>
        <Nav show={false} />
        <main className="Reserve_Table_Section">
          <div className="Title_Little_Lemon">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
          </div>
        
          <div className="Form_Side">            
              <Form />
          </div>
          
        </main>
        <Footer />
        </>
    );
  };