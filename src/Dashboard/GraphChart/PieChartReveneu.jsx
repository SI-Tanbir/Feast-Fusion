import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartReveneu = () => {
  const { data: chartdata } = useQuery({
    queryKey: ['chart-data'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/adminOrderStatus');
      return res.data;
    },
  });

  const ourChart = chartdata?.map((res) => ({
    name: res.Category,
    value: res.totalRevenue,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={ourChart}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {ourChart?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        payload={ourChart?.map((item, index) => ({
          value: item.Category, // Use the category name as the label
          type: 'square',   // Legend icon shape
          color: COLORS[index % COLORS.length], // Corresponding color
        }))}
      />
    </PieChart>
  );
};

export default PieChartReveneu;
