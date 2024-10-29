import "./Form_Find_Table.css";
import Button from "../../Components/Button/Button"

export default function Form_Find_Table () {
    return (
        <>
        
        <form className="find_table_form">            
                        
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
                <Button >&nbsp;&nbsp;&nbsp;&nbsp;Lets go&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </div>
                
            
        </form>
        </>
    );
  };
















