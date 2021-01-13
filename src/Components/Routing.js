import { Switch, Route, Redirect } from "react-router-dom";
import { authenticationService } from './AuthService';
import Home from '../Views/Home';
import About from '../Views/About';
import NotFound from '../Views/NotFound';
import SignIn from '../Views/Authentication/SignIn';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/Sign In', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

export default function Routing() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/Home" component={Home} />
            <PrivateRoute path="/About" component={About} />
            <Route path="/Sign In" render={() => <SignIn/>} />
            <Route component={NotFound} />
        </Switch>
      );
}
