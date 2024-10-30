import "./Form_Find_Table.css";
import Form_Sing_In from "./Form_Sing_In";
import Button from "../../Components/Button/Button"
import { useState, useRef } from "react";
import  Resterant from "../../Sources/Images/restaurant.jpg"
import  Resterant_Chef from "../../Sources/Images/restaurant chef B.jpg"

export default function Form_Find_Table () {
    const [showFindForm, setShowFindForm] = useState(true);
    const [showLogeIn, setShowLogeIn] = useState(false);
    

    const handelClick = () => {
        setShowFindForm(false);
        setShowLogeIn(true);

        }

    
    return (
        <>
        {showFindForm && ( // Only render the form when `show` is true
        <form className="find_table_form">
            <div className="Images_Side">
              <img className="Resrve_Restaurant" src={Resterant_Chef} alt="#"/>
              <img className="Resrve_Restaurant_Chef" src={Resterant} alt="#"/>
          </div>
        <h2 className="find_title">Find a table for any occasion</h2>
                <div className="date">
                    <label for="date" >Date</label>
                    <input type="date" id="date" name="date"/>
                </div>

                <div className="time">
                    <label for="time" >Time</label>
                    <input type="time" id="time" name="time"/>
                </div>
                
                <div className="number_diners">
                    <label for="number_diners" >Number of Diners</label>
                    <input type="number" min={0} max={15} id="number_diners" name="number_diners"/>
                </div>
                <div className="occasion">
                    <label for="occasion" >Occasion</label>
                    <select name="occasion">
                        <option>Berthday</option>
                        <option>Wdding</option>
                        <option>Besnis</option>
                        <option>Metting</option>
                    </select>
                </div>
                <h2 className="options_title">Setting Options</h2>
                <div className="standard">
                    <label for="standard">Standard</label>
                    <input type="radio" id="standard" name="fav_language" ></input>
                </div>
                <div className="outside">
                    <label for="outside">Outside</label>
                    <input type="radio" id="outside" name="fav_language" ></input>
                </div>

                <div className="btn_lets_go">
                    <Button Click_On={handelClick}>&nbsp;&nbsp;&nbsp;&nbsp;Lets go&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </div>
            
        </form>
        )};
        {showLogeIn &&(
            <Form_Sing_In />
        )

        }
        </>
    );
  };
















