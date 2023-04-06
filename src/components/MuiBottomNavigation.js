import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100vw' , position: 'fixed', bottom: 0}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recentes"
        value="recentes"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favoritos"
        value="favoritos"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Locais"
        value="locais"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction 
        label="Notificações" 
        value="notifications" 
        icon={<NotificationsNoneIcon />} 
      />
    </BottomNavigation>
  );
}