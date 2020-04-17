import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import weatherData from '../data/utahWeather.json'

function makeDataObjects(xArr, yArr) {

    let resultObjArr = []

    for (let index = 0; index < xArr.length; index++) {

        resultObjArr.push({
            date_time: xArr[index],
            wind_speed_set_1: yArr[index]
        })
    }

    console.log(resultObjArr)

    return resultObjArr
}

function SimpleLineChart(props) {

    const [data, setData] = React.useState([])

    const yLabel = 'Wind Speed'

    const getData = () => {

        const dateTimeArr = weatherData.STATION[0].OBSERVATIONS.date_time
        const windSpeedArr = weatherData.STATION[0].OBSERVATIONS.wind_speed_set_1

        setData(makeDataObjects(dateTimeArr, windSpeedArr))
    }

    React.useEffect(() => {

        getData()

    }, [])


    console.log(data)
    //{date_time: , wind_speed_set_1: }

    return (
        <div>
            <div>
                <LineChart data={data} width={1200} height={600}>
                    <XAxis dataKey="date_time" interval={25} label='Date' />
                    <YAxis label={yLabel} />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="wind_speed_set_1" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>


    );
}

export default SimpleLineChart;