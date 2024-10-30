import "./Button.css"
import { Link } from "react-router-dom";

export default function Button ({children, to, Click_On}) {
    return (
          <Link className="Button" to={to} onClick={Click_On}>
              {children}
          </Link>
    );
  };