import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };



const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

const BellcurbChart = () => {

    const {data:cartdata}=useQuery({
        queryKey:['chart-data'],
        queryFn:async()=>{
            const res =await axios.get('http://localhost:5000/adminOrderStatus')
            return res.data
        }
    
       
    })
    // console.log(cartdata)

  return (
    <div>
        
        <BarChart
      width={500}
      height={300}
      data={cartdata}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {cartdata?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>


    </div>
  )
}

export default BellcurbChart