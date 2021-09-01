import React from 'react';
import ReactECharts from 'echarts-for-react';
interface IAreaChart {
  data?: any[],
}
// const AreaChart: React.FC<IAreaChart> = ({ data = [] },) => {
//   const getOption = () => ({
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [{
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       smooth: true,
//       areaStyle: {}
//     }]
//   });
//   return (
//     <div className="areaChart-wrap">
//       <ReactECharts
//         option={getOption()}
//         style={{ width: '500px', height: '500px' }}
//       />
//     </div>
//   )
// }

// export default AreaChart;


const AreaChart: React.FC = () => {
  const options = {
    grid: {
      top: 10,
      right: 50,
      bottom: 50,
      left: 100, // grid 组件离容器左侧的距离。
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      offset: 20, //X 轴相对于默认位置的偏移
      nameTextStyle: {
        color: "rgba(170, 27, 27, 1)"
      },
      boundaryGap: false,
      axisTick: { // 坐标轴刻度相关设置
        show: false, // 是否显示坐标轴刻度
      },
      axisPointer: { //坐标轴指示器配置项
        // snap: true,
        lineStyle: {
          color: "#341EFF",
          width: 2,
        }
      }
    },
    yAxis: {
      type: 'value',
      offset: 30, //y 轴相对于默认位置的偏移
      minInterval: 1, //自动计算的坐标轴最小间隔大小。 设置成1保证坐标轴分割刻度显示成整数。
      axisTick: {
        show: false
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        areaStyle: {},
        connectNulls: true, // 是否连接空数据
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return <ReactECharts option={options} />;
};
export default AreaChart;