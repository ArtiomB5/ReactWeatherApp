import React, {useState} from 'react';
import './App.css';
import {Container, Grid} from "@material-ui/core";
import {InputCity} from "./conponents/inputCity/Main";
import {MainDayWeatherRender} from "./conponents/mainDayWeatherRender/Main";
import {OtherDaysWeatherRender} from "./conponents/otherDaysWeatherRender/Main";
import {TempDiagram} from "./conponents/tempDiagram/Main";
import {propsItemType} from './conponents/tempDiagram/types';
import {weatherByDaysType} from './conponents/otherDaysWeatherRender/types';
import * as Constants from './constants/index';

function App() {
  const [weatherState, setWeatherState] = useState<weatherByDaysType[]>([]);
  const [diagramState, setDiagramState] = useState<propsItemType[]>([]);
  const [visibility, setVisibility] = useState(false);

  // KEY = 971b409f48b1424a8ff173906210508
  // .env => read about it for api key and base path, get string process.env.KEY
  const API_KEY = "971b409f48b1424a8ff173906210508";

  const getWeather = async (cityName: string) => {
    fetch(`${Constants.WEATHER_API_URL}${API_KEY}&q=${cityName}&${Constants.WEATHER_API_PARAMS}`)
      .then(response => response.json())
      .then(json => {
        // const
        let weatherByDays: Array<weatherByDaysType> = [];
        let diagramData: Array<propsItemType> = [];
        let cityName = json.location.name;

        // any
        // json.forecast.forecastday.forEach((day: any) => {
        json.forecast.forecastday.forEach((day: any) => {
          let dayWeather = {
            name: cityName,
            date: day.date,
            maxtemp_c: day.day.maxtemp_c,
            avgtemp_c: day.day.avgtemp_c,
            mintemp_c: day.day.mintemp_c,
            maxwind_kph: day.day.maxwind_kph,
            avghumidity: day.day.avghumidity,
            text: day.day.condition.text,
            icon: day.day.condition.icon,
            uv: day.day.uv,
          }
          weatherByDays.push(dayWeather);

          let dataArray = day.date.split('-');
          let diagramDataItem = {
            day: `${dataArray[2]}.${dataArray[1]}`,
            temperature: day.day.avgtemp_c,
          }
          diagramData.push(diagramDataItem);
        });
        setWeatherState(weatherByDays);
        setDiagramState(diagramData);
        setVisibility(true);
      })
  }

  return (
    <div className="App">
      <Container>
        <Grid
          style={{
            maxWidth: '50%',
            margin: '10px auto',
            borderRadius: '10px',
            border: '1px solid black'
          }}
        >
          <InputCity param={(city: string) => getWeather(city)}/>
        </Grid>
        <Grid style={{
          maxWidth: '50%',
          margin: '10px auto',
          borderRadius: '10px',
          border: '1px solid black'
        }}>
          {!visibility && Constants.CURRENT_WEATHER_MSG}
          {visibility &&
            <MainDayWeatherRender param={weatherState.slice(0, 1)}/>}
        </Grid>
        <Grid style={{
          maxWidth: '50%',
          margin: '10px auto',
          borderRadius: '10px',
          border: '1px solid black'
        }}>
          {!visibility && Constants.NEXT_2_DAYS_WEATHER_MSG}
          {visibility &&
            <OtherDaysWeatherRender param={weatherState.slice(1)}/>}
        </Grid>
        <Grid style={{
          maxWidth: '50%',
          maxHeight: '50%',
          margin: '10px auto',
          borderRadius: '10px',
          border: '1px solid black'
        }}>
          {!visibility && Constants.TEMP_CHART_MSG}
          {visibility && <TempDiagram param={diagramState}/>}
        </Grid>
        <Grid style={{margin: '10px auto'}}>
          Powered by <a href={Constants.WEATHER_API_COM}
                        title={Constants.WEATHER_API_TITLE}>WeatherAPI.com</a>
          <br/>
          Powered by <a href={Constants.VICTORY_URL}
                        title={Constants.VICTORY_TITLE}>VICTORY</a>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
