
export function stationsToGeoJSON(data){

    let features = []

    let result = {
        "type" : "FeatureCollection",
        "features" : []
    }

    for(let station of data.STATION){
        features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    Number(station.LONGITUDE),
                    Number(station.LATITUDE)
                ]
            },
            "properties":{
                "name": station.NAME
            }
        })
    }

    result.features = features

    return result
}
