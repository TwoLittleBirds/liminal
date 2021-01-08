import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";


export default function AccountMenu(props)  {
    return (
        <Menu
        anchorEl={props.anchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={props.menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.open}
        onClose={() => props.closeHandler()}
      >
          {['Sign In', 'Sign Out'].map((text, index) => (
              <MenuItem key={index} component={Link} to={text} onClick={() => props.closeHandler()} >{text}</MenuItem>
          ))}
      </Menu>
    );
}
