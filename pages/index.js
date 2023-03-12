import React from 'react';
//import ReactDOM from 'react-dom';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import MapComponent from '../src/components/MapComponent';

// Não está funcionando as coordenadas de -23.504003341782116, -46.87443782973699
// Apenas as coordenadas 0, 0 funcionam
const barueriLatLng = [-46.87443782973699, -23.504003341782116]; //Coordenadas de Barueri

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          center: barueriLatLng,
          zoom: 0,
      };
    }

    componentDidMount() {
        new Map({
          target: "map-container",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: barueriLatLng,
                zoom: 7
                ,
            }),
        });
    }

    render() {
        return (
        <>
            <Header/>
            <Navbar/>
            <MapComponent/>
            <Footer/>
        </>
        );
    }
}; 