import {Grid, Typography} from "@material-ui/core";
import * as Constants from '../../constants'
import {propsType} from './types'

export const MainDayWeatherRender = (props: propsType) => {
  let outputData = props.param.map((day) => {
    return (
      <Grid>
        <Typography gutterBottom variant="subtitle1">
          <img src={day.icon} alt={day.text}/>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {day.text} in {day.name} now.
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.DATE} {day.date}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.MIN_TEMP} {day.mintemp_c}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.AVG_TEMP} {day.avgtemp_c}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.MAX_TEMP} {day.maxtemp_c}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.MAX_WIND} {day.maxwind_kph}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.HUM} {day.avghumidity}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.UVI} {day.uv}
        </Typography>
      </Grid>
    )
  });
  return (
    <Grid>
      {outputData}
    </Grid>
  )
}