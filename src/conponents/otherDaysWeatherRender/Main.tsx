import {Grid, Typography} from "@material-ui/core";
import * as Constants from '../../constants'
import {propsType} from './types'

export const OtherDaysWeatherRender = (props: propsType) => {
  let outputData = props.param.map((day) => {
    return (
      <Grid style={{flexGrow: 1}}>
        <Typography gutterBottom variant="subtitle1">
          <img src={day.icon} alt={day.text}/>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.DATE} {day.date}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.AVG_TEMP} {day.avgtemp_c}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.MAX_WIND} {day.maxwind_kph}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {Constants.HUM} {day.avghumidity}
        </Typography>
      </Grid>
    )
  });

  return (
    <Grid style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      {outputData}
    </Grid>
  )
}