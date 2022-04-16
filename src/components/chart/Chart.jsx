import './chart.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <XAxis dataKey='name' />

          <Line type='monotone' dataKey={dataKey} stroke='#fe5161' />
          <Tooltip
            contentStyle={{
              backgroundColor: '#9e9e9e',
              color: '#646464',
              border: 'none',
              borderRadius: '5px',
            }}
            itemStyle={{ color: 'black' }}
          />
          {grid && <CartesianGrid stroke='#2b2b2b' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
