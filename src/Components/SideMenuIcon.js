import Home  from '@material-ui/icons/Home';
import About  from '@material-ui/icons/PermDeviceInformation';

const SideMenuIcons = {
    Home,
    About
  };
  
  const SideMenuIcon = ({name})=>{
      const home = 'Home';
      let Icon = SideMenuIcons[name];

      if(Icon){
        return(<Icon name={name} data-testid='icon-svg'/>);
        } else {
            Icon = SideMenuIcons[home];
            return(<Icon name={home} data-testid='icon-svg'/>);
        }
  }
  
  export default SideMenuIcon
