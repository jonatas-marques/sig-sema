import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles.module.css'

//const mapElement = useRef()

function Home() {
    return (
        <div>
            <div
                className={styles.header}
                class="col-md-12 text-center">
                <h1>Prefeitura Municipal de Barueri</h1>
            </div>
            <div 
                className={styles.side_panel}
                class="col-md-3">
                <h2 class="text-center">Prédios Públicos</h2>
                <button id="zoomToSEMA" class="form-control btn-primary">Secretaria de Recursos Naturais e Meio Ambiente</button>
            </div>
            <div 
                //ref={mapElement}
                className={styles.mapdiv} class="col-md-9">
            </div>
            <div className={styles.footer} class="col-md-12">
                <h4 id="map_coords" class="text-center">Latitude: -23.5 Longitude: -46.8 Zoom Level: 13</h4>
                <h4 class="text-center"> &copy;2023 <a href="https://portal.barueri.sp.gov.br/">Prefeitura de Barueri</a> </h4>
            </div>
        </div>
    )                
}

export default Home