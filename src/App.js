import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./components/Authentication/ProtectedRoutes";
import ResetPass from "./pages/resetPass/ResetPass";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoutes exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-pass" component={ResetPass} />
      </Switch>
    </div>
  );
}

export default App;
