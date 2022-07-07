import React, { useContext } from "react";
import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/CreatePost">Shedule Slot</Link>
        </li>,
        <li>
          <a
            className="btn-small logout-btn"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/SignIn")
              // navigate("/SignIn");
            }}
          >
            Logout
          </a>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>,
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div style={{ padding: "0 50px" }} className="nav-wrapper white">
        <Link to={state ? "/" : "/signIn"} className="brand-logo left">
          WashUp
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;