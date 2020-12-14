import Home  from '@material-ui/icons/Home';
import About  from '@material-ui/icons/PermDeviceInformation';

const MenuIcons = {
    Home,
    About
  };
  
  const MenuIcon = ({name})=>{
      let Icon = MenuIcons[name];
      return(
          <Icon name={name}/>
      );
  }
  
  export default MenuIcon
