import React from 'react';
import Map from './Map'


function MainPage(props) {

    return (
        <div id='map'>
            <div>
                <h1>Utah Weather Stations</h1>
                <p>
                    Data provided by: 
                    <a href='https://synopticdata.com/'>synopticdata.com </a>
                    ||  
                    Map service by:
                    <a href='https://www.mapbox.com/'>mapbox.com </a>
                    ||
                    Site Created by <a href='http://spencer-nelson.com/'>Spencer Nelson</a>
                </p>
            </div>
            <Map></Map>
        </div>
    );
}

export default MainPage;