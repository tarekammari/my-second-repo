import "./Button.css"
import { Link } from "react-router-dom";

export default function Button ({children, to}) {
    return (
          <Link className="Button" to={to} >
              {children}
          </Link>
    );
  };