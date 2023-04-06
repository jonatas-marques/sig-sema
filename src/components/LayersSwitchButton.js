import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Layers } from '@mui/icons-material';

/* XYZ URL options
Google Earth Base Map : https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}

Bing Virtual Earth : http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1

Esri Base Map : https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}

Google Satellite Street Map Hybrid : https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}

Open Topological Map : https://tile.opentopomap.org/{z}/{x}/{y}.png

Open Street Map : http://tile.openstreetmap.org/{z}/{x}/{y}.png

Google Street Map : https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}

Google Terrain Map : http://mt0.google.com/vt/lyrs=t&hl=en&x={x}&y={y}&z={z}

Google Terrain Street Hybrid : http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}

Google Alternative Street Map : http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}
*/

const layers = ['Open Street Map', 'Google Street Map', 'Google Terrain Map', 'Esri Base Map'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selecionar Mapa de Fundo</DialogTitle>
      <List sx={{ pt: 0 }}>
        {layers.map((layer) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(layer)} key={layer}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={layer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(layers[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <Layers/>
      </IconButton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}