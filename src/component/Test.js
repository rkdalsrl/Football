import React, {useState, useEffect} from "react";

import "../css/test.css";

import 'ol/ol.css';  //스타일
import { Map as OlMap, View } from 'ol';  //뷰 관리
import { fromLonLat, get as getProjection } from 'ol/proj'; //위경도
import { Tile as TileLayer } from 'ol/layer';  //지도타일
import { OSM } from 'ol/source';  //지도정보

function Test(){

  const [mapObject, setMapObject] = useState({})
    useEffect(() => {
        const map = new OlMap({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: 'map', 
            view: new View({
                //projection: getProjection('EPSG:3857'),
                center: [5735920.9114, 2910878.8674],
                zoom: 13
            })
        })
        setMapObject({ map })
        return ()=> null
    }, [])

    return (
        <div>

          <div id="map" className="map"></div>
          
    
        </div>
    );
}

export default Test;