import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import { authenticationService } from './AuthService';
import { createBrowserHistory } from "history";

export default function AccountMenu(props)  {
    const menus = ['A Menu'];

    const logout = () => {
        props.closeHandler();
        authenticationService.logout();
        const history = createBrowserHistory();
        history.push('/Sign In');
    }
    return (
        <Menu
        anchorEl={props.anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={props.menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.open}
        onClose={() => props.closeHandler()}>

        { props.user && menus.map((text, index) => (
                    <MenuItem key={index} component={Link} to={text} onClick={() => props.closeHandler()} >{text}</MenuItem>))
        }

        { props.user ? <MenuItem key={'SignOut'} onClick={() => logout()} >Sign Out</MenuItem> : 
            <MenuItem key={'Sign In'} component={Link} to={'Sign In'} onClick={() => props.closeHandler()} >Sign In</MenuItem>
        }


      </Menu>
    );
}
