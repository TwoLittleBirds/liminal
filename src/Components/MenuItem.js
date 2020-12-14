import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

function MenuItem({text, open, link, icon}) {
    return (
      <div>
        <Tooltip title={text} placement="right" disableHoverListener={open} arrow> 
        <ListItem button key={text} component={link} to={"/" + text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
        </Tooltip>
      </div>
    );
  }

  export default  MenuItem;