import React from 'react';

import ResponsiveAppBar from '../src/components/ResponsiveAppBar';
import MapComponent from '../src/components/MapComponent';
import BottomNav from '../src/components/MuiBottomNavigation';
import VerticalToolBox from '../src/components/VerticalToolBox';

export default function Home(){
    return (
        <>  
            <div>
                <ResponsiveAppBar />
            </div>
            <div>
                <MapComponent/>
                <VerticalToolBox/>
            </div>
            <div>
                <BottomNav/>
            </div>
        </>
    )
}