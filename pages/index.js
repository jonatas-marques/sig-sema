//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
//Style CSS
import styles from '/components/HomeMap.module.css'

function Home() {
    return (
        <div>
            <div
                //className={styles.header}
                class="header col-md-12">
                <h1>Prefeitura Municipal de Barueri</h1>
            </div>
            <div id="side_panel" class="col-md-3">
                <h1 class="text-center">Prédios Públicos</h1>
                <button id="zoomToSEMA" class="form-control btn-primary">Secretaria de Recursos Naturais e Meio Ambiente</button>
            </div>
            <div id="mapdiv" class="col-md-9"></div>
            <div id="footer" class="col-md-12">
                <h4 id="map_coords" class="text-center">Latitude: -23.5 Longitude: -46.8 Zoom Level: 13</h4>
                <h4 class="text-center"> &copy;2023 <a href="https://portal.barueri.sp.gov.br/">Prefeitura de Barueri</a> </h4>
            </div>
        </div>
    )                
}

export default Home