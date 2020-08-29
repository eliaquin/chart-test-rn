import React from 'react';
import {View} from 'react-native';
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryLine,
} from 'victory-native';

const StackedChart = (props) => {
  const {barValues, lineValues} = props;
  const bar1 = barValues.map((el, idx) => ({x: idx + 1, y: el.s1}));
  const bar2 = barValues.map((el, idx) => ({x: idx + 1, y: el.s2}));

  return (
    <View>
      <VictoryChart domain={{x: [0, barValues.length], y: [0, 100]}}>
        <VictoryStack colorScale={['gray', 'lightgray']}>
          <VictoryBar data={bar1} />
          <VictoryBar data={bar2} />
        </VictoryStack>
        <VictoryLine
          style={{
            data: {stroke: '#2196f3'},
            parent: {border: '1px solid #ccc'},
          }}
          interpolation="natural"
          data={lineValues}
        />
      </VictoryChart>
    </View>
  );
};

export default StackedChart;
