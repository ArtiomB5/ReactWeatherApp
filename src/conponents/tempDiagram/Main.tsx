import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme
} from "victory";
import React from "react";
import * as Constants from '../../constants'
import {propsType} from './types'

export const TempDiagram = (props: propsType) => {
  let tickFormat = props.param.map((item) => item.day);

  return (
    <VictoryChart
      domainPadding={30}
      theme={VictoryTheme.material}
      height={200}
    >
      <VictoryLabel
        text={Constants.CHART_LABEL}
        x={175}
        y={25}
        textAnchor="middle"
        style={{fontSize: 12}}
      />
      <VictoryAxis
        tickValues={[]}
        tickFormat={tickFormat}
        style={{
          tickLabels: {fontSize: 7, padding: 1},
          axisLabel: {fontSize: 10, padding: 15}
        }}
        label={Constants.X_AXIS}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`${x}°C`)}
        style={{
          tickLabels: {fontSize: 7, padding: 1},
          axisLabel: {fontSize: 10, padding: 25}
        }}
        label={Constants.Y_AXIS}
      />
      <VictoryBar
        data={props.param}
        // data accessor for x values
        x="day"
        // data accessor for y values
        y="temperature"

        // labels={["first", "second", "third"]}

        labels={props.param.map((item) => `🌡️${item.temperature}°C`)}
        cornerRadius={{top: 10}}
        style={{
          data: {
            fill: "#ec8c69",
            stroke: "black",
            strokeWidth: 0.35,
            width: 20
          },
          labels: {fontSize: 7},
        }}
      />
    </VictoryChart>
  )
}
