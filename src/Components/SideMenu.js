import {Link} from "react-router-dom";
import { Flags } from 'react-feature-flags';
import List from '@material-ui/core/List';
import SideMenuItem from './SideMenuItem';
import MenuIcon from './SideMenuIcon';


export default function SideMenu(props)  {
    return (
        <Flags authorizedFlags={["AdminOnly"]}>
        <List data-testid="menu-options">
          {['Home', 'About'].map((text, index) => (
            <SideMenuItem key={index} text={text} open={props.open} link={Link} icon={ <MenuIcon name={text}/> }/>
          ))}
        </List>
      </Flags>
    );
}