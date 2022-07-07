import "./App.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";

import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import AdminSigninPage from "./pages/adminSignin";
import AdminSignupPage from "./pages/adminSignup";
import DisplayTable from "./components/displayTable";
import SearchDoctors from "./components/SearchDoctors";

export const UserContext = createContext();

const Routing = () => {
  // const navigate = useNavigate();
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      // if(!history.location.pathname.startsWith('/reset'))
      // navigate("/SignIn");
      history.push("/SignIn");
    }
  }, []);
  return 0;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/adminsignin" component={AdminSigninPage} exact />
        <Route path="/adminsignup" component={AdminSignupPage} exact />
        <Route path="/table" component={DisplayTable} exact />
        <Route path="/search" component={SearchDoctors} exact />


        {/* <Route path="/specialists" component={specialists} exact />
        <Route path="/consult" component={Consult} exact />
        <Route path="/confirm_Booking" component={Confirm_Booking} exact />
        <Route path="/doctors" component={ShowAllDoctors} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
