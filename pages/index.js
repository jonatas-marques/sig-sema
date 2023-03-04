import React from 'react';
//import ReactDOM from 'react-dom';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
//import './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const barueriLatLng = [-23.504003341782116, -46.87443782973699]; //Coordenadas de Barueri

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          center: barueriLatLng,
          zoom: 9,
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
                zoom: 9
                ,
            }),
        });
    }

    render() {
        return (
        <div>
            <div class="row">
                <div class="col-md-8"><h3>Sig Web</h3></div>
                <div class="col-md-4" style={{textAlign: "right"}}><h3>Usuário Nome Servidor</h3></div>

            </div>
            <div class="row" style={{height:'100vh',width:'100%'}} id="map-container" className="map-container" />
        </div>
        );
    }
};