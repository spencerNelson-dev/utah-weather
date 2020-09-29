import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import weatherData from '../data/utahWeather.json'
import temperatures from '../data/herrimanTemps.json'

function reduceData(data){
    let reducedData = data.reduce((prev, current, index) => {
        
        if(index === 0){
            prev.push(current)
        } else if(index % 100 === 0){
            prev.push(current)
        }

        return prev
        
    },[])

    return reducedData
}

function makeDataObjects(xArr, yArr) {

    let resultObjArr = []

    for (let index = 0; index < xArr.length; index++) {

        resultObjArr.push({
            date_time: xArr[index],
            air_temp: yArr[index]
        })
    }

    console.log(resultObjArr)

    return resultObjArr
}

function SimpleLineChart(props) {

    const [data, setData] = React.useState([])

    const yLabel = 'Air Temp degree F'

    const getData = () => {

        // const dateTimeArr = weatherData.STATION[0].OBSERVATIONS.date_time
        // const windSpeedArr = weatherData.STATION[0].OBSERVATIONS.wind_speed_set_1

        const dateTimeArr = temperatures.date_time
        const tempArr = temperatures.air_temp

        setData(reduceData(makeDataObjects(dateTimeArr, tempArr)))
    }

    React.useEffect(() => {

        getData()

    }, [])


    console.log(data)
    //{date_time: , wind_speed_set_1: }

    return (
        <div>
            <div>
                <LineChart data={data} width={1800} height={600}>
                    <XAxis dataKey="date_time" interval={25} label='Date' />
                    <YAxis label={yLabel} />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="air_temp" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>


    );
}

export default SimpleLineChart;