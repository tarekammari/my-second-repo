import Nav from "../Home_Page/Nav_Section/Nav";
import Footer from "../Home_Page/Footer_Section/Footer"; 
import  Resterant from "../../Sources/Images/restaurant.jpg"
import  Resterant_Chef from "../../Sources/Images/restaurant chef B.jpg"
import "./Reserve_Table.css";

export default function Reserve_Table () {
    return (
        <>
        <Nav />
        <main className="Reserve_Table_Section">
          <div className="Form_Side">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <h2>Find a table for any occasion</h2>
            <form >
              <label for="date" >Date</label>
              <input type="date" id="date" name="date"/>
              <label for="time" >Time</label>
              <input type="time" id="time" name="time"/>
              <label for="number_diners" >Number of Diners</label>
              <input type="number" min={0} max={15} id="number_diners" name="number_diners"/>
              <select>
                <option>Berthday</option>
                <option>Wdding</option>
                <option>Besnis</option>
                <option>Metting</option>
              </select>

            </form>
          </div>
          <div className="Images_Side">
              <img className="Restaurant_Chef" src={Resterant} alt="#"/>
              <img className="Restaurant" src={Resterant_Chef} alt="#"/>
          </div>
        </main>
        <Footer />
        </>
    );
  };