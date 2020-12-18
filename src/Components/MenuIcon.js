import Home  from '@material-ui/icons/Home';
import About  from '@material-ui/icons/PermDeviceInformation';

const MenuIcons = {
    Home,
    About
  };
  
  const MenuIcon = ({name})=>{
      const home = 'Home';
      let Icon = MenuIcons[name];

      if(Icon){
        return(<Icon name={name} data-testid={name}/>);
        } else {
            Icon = MenuIcons[home];
            return(<Icon name={home} data-testid={home}/>);
        }
  }
  
  export default MenuIcon
