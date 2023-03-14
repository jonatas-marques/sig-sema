import React from 'react';
//import ReactDOM from 'react-dom';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import MapComponent from '../src/components/MapComponent';

// Não está funcionando as coordenadas de -23.504003341782116, -46.87443782973699
// Apenas as coordenadas 0, 0 funcionam
const barueriLatLng = [-46.87443782973699, -23.504003341782116]; //Coordenadas de Barueri
=======
//import './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { fromLonLat } from 'ol/proj';

const barueriPlace = [-46.87443782973699, -23.504003341782116]; //Coordenadas de Barueri Lat Lon invertidas por causa do sistema cartesiano do OpenLayers
const barueriWebMercator = fromLonLat(barueriPlace); // Precisa de transformação das coordenadas
const ZoomPlace = 12;
>>>>>>> d8c3719874bb1f26ef68248ba2bc7af9714d07ab

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
<<<<<<< HEAD
          center: barueriLatLng,
          zoom: 0,
=======
          center: barueriWebMercator,
          zoom: ZoomPlace,
>>>>>>> d8c3719874bb1f26ef68248ba2bc7af9714d07ab
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
<<<<<<< HEAD
                center: barueriLatLng,
                zoom: 7
                ,
=======
                center: barueriWebMercator,
                zoom: ZoomPlace,
>>>>>>> d8c3719874bb1f26ef68248ba2bc7af9714d07ab
            }),
        });
    }

    render() {
        return (
<<<<<<< HEAD
        <>
            <Navbar/>
            <MapComponent/>
            <Footer/>
        </>
=======
        <div>
            <div class="row">
                <div class="col-md-8"><h3>Menu Sig Web</h3></div>
                <div class="col-md-4" style={{textAlign: "Right"}}><h3>Usuário Nome Servidor</h3></div>

            </div>
            <div class="row" style={{height:'850px',width:'100vw'}} id="map-container" className="map-container" />
            <div class="row" style={{position: "relative", height: "50px", marginTop: "50px", textAlign: "center"}} id="footer">@2023 Prefeitura de Cidade</div>
        </div>
>>>>>>> d8c3719874bb1f26ef68248ba2bc7af9714d07ab
        );
    }
}; 