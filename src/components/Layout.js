import React from 'react';

import ResponsiveAppBar from './ResponsiveAppBar';
import MapComponent from './MapComponent';
import VerticalToolBox from './VerticalToolBox';
import BottomNav from './MuiBottomNavigation';

export default function Home(){
    return (
        <>  
            <div>
                <ResponsiveAppBar />
            </div>
            <div>
                <MapComponent />
                <VerticalToolBox />
            </div>
            <div>
                <BottomNav />
            </div>
        </>
    )
}