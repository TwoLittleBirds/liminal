import { Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import About from '../Views/About';
import NotFound from '../Views/NotFound';
import SignIn from '../Views/Authentication/SignIn';
import SignOut from '../Views/Authentication/SignOut';

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/Home" render={() => <Home/>} />
            <Route path="/About" render={() => <About/>} />
            <Route path="/Sign In" render={() => <SignIn/>} />
            <Route path="/Sign Out" render={() => <SignOut/>} />
            <Route component={NotFound} />
        </Switch>
      );
}
