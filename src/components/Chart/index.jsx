import {BarChart} from 'react-native-gifted-charts';
import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../utils/globalConstants';
const Chart = () => {
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  return (
    <View style={{marginBottom: 30}}>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        xAxisLabelTextStyle={{ color: colors.black }}
        yAxisTextStyle={{color:colors.black}}
        hideRules
        showReferenceLine1
        referenceLine1Position={420}
        referenceLine1Config={{
          color: 'gray',
          dashWidth: 2,
          dashGap: 3,
        }}
      />
    </View>
  );
};
export default Chart;
