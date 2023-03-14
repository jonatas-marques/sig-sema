import React from 'react';

import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import MapComponent from '../src/components/MapComponent';

export default function Home(){
    return (
        <>
            <Navbar/>
            <MapComponent/>
            <Footer/>
        </>
    )
}