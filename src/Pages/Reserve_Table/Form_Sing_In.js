import "./Form_Sing_In.css";
import { useState } from "react";


export default function Form_Sing_In () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });

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
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };


    return (
        <>
            <form onSubmit={handelSubmit}
            className="form_Sing_In_form">
                <fieldset>
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
                            autocomplete="off" 
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

                        

                        

                        <div className="btn_lets_go">
                            <button type="submit"  >Continue</button>
                        </div>
                    </div>


                </fieldset>
                
            </form>
        </>
    );
  };