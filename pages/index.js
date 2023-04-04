import React from 'react';

import ResponsiveAppBar from '../src/components/ResponsiveAppBar';
import MapComponent from '../src/components/MapComponent';
import BottomNav from '../src/components/MuiBottomNavigation';

export default function Home(){
    return (
        <>  
            <div>
                <ResponsiveAppBar />
            </div>
            <div>
                <MapComponent/>
            </div>
            <div>
                <BottomNav/>
            </div>
        </>
    )
}