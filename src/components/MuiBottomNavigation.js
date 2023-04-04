import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100vw' , position: 'absolute', bottom: 0}} value={value} onChange={handleChange}>
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
        label="Pasta" 
        value="pasta" 
        icon={<FolderIcon />} 
      />
    </BottomNavigation>
  );
}