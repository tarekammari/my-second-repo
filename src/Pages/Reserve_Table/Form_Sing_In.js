import "./Form_Sing_In.css";
import { useState, link } from "react";
import Form_Find_Table from "./Form_Find_Table";



export default function Form_Sing_In () {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [showFindForm, setShowFindForm] = useState(false);
    const [showLogeIn, setShowLogeIn] = useState(true);
    

    const handelClick = () => {
        setShowFindForm(true);
        setShowLogeIn(false);

        }

    const getIsFormValid = () => {
        return (
            firstName &&
            email &&
            password 
        )
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
    };

    const handelSubmit = (e) => {        
        alert("Confirmed, you will receive an email !");
        clearForm();
    };


    return (
        <>
        {showLogeIn && (
            <form onSubmit={handelSubmit}
            className="form_Sing_In_form">
                <fieldset >
                <div className="left">

                    </div>
                    <div className="right">

                        <div className="Field">
                            <label >
                                First Name <sup>*</sup>
                            </label>
                            <input
                            type="text"
                            autocomplete="given-name"
                            required/>
                        </div>

                        <div className="Field">
                            <label >
                                Last Name <sup>*</sup>
                            </label>
                            <input
                            type="text" 
                            autocomplete="family-name" 
                            required/>
                        </div>
                        

                        <div className="Field">
                            <label >
                                telphone
                            </label>
                            <input
                            type="telphone"
                            autocomplete="tel-national" 
                            required/>
                        </div>

                        <div className="Field">
                            <label >
                                Email <sup>*</sup>
                            </label>
                            <input
                            type="email"
                            required/>
                        </div>

                        <div className="Field">
                            <label >
                                Passowrd <sup>*</sup>
                            </label>
                            <input
                            type="password"
                            autocomplete="one-time-code"
                            required/>
                        </div>

                        <div className="btn_continue">
                            <button type="submit">Continue</button>
                            <button  className="btn_back" onClick={handelClick} >Back</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        )}
        {showFindForm &&(
            <Form_Find_Table />
        )
        }
            
        </>
    );
  };