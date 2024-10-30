import "./Form_Sing_In.css";
import Button from "../../Components/Button/Button"

export default function Form_Sing_In () {
    return (
        <>
            <form className="form_Sing_In_form">
                <div className="left">

                </div>
                <div className="right">

                    <label for="firstName">First Name:</label>
                    <input name="firstName" id="firstName" type="text" autocomplete="given-name" />

                    <label for="lastName">Last Name:</label>
                    <input name="lastName" id="lastName" type="text" autocomplete="family-name" />

                    <label for="telphone">telphone:</label>
                    <input name="telphone" id="telphone" type="telphone" autocomplete="tel-national" />

                    <label for="email">Email:</label>
                    <input name="email" id="email" type="email" autocomplete="off" />

                    <label for="password">Passowrd:</label>
                    <input name="password" id="password" type="password" autocomplete="one-time-code" />

                    <label for="options">Passowrd:</label>
                    <input name="options" id="options" type="text" autocomplete="off" />



                    <div className="btn_lets_go">
                        <Button >&nbsp;&nbsp;&nbsp;&nbsp;Continue&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    </div>
               </div>
            </form>
        </>
    );
  };