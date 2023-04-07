import React from 'react';
import { IconButton } from "@mui/material";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import  { useEffect, useState } from 'react';

export default function LocationButton({ setLocation }) {

    const handleButtonClick = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
        });
      }, []);

    return (
          <IconButton onClick={handleButtonClick}>
              <LocationSearchingIcon/>
          </IconButton> 
    );
}