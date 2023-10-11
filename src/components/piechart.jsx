import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./piechart.css"
ChartJS.register(ArcElement, Tooltip, Legend);

 
const options = {
    radius: '50%', 
    cutoutPercentage: 10,
    plugins: {
        legend: {
          display: false,
        },
      },
     
  };

export default function PieChart() {

  const [per, setper] = useState([])
  useEffect(() => {
    fetch("https://ediviron-nestjs-api.vercel.app/percentage-of-modes") .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const d=[]
      console.log(data)
      const desiredOrder = ['ONLINE', 'CASH', 'CHEQUE', 'DEMAND_DRAFT']
      const percentages = desiredOrder.map((mode) => {
        const found = data.find((item) => item.payment_mode === mode);
        return found ? found.percentage : 0; // Return 0 if not found
      });
     setper(percentages)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  
    
  }, [])
console.log(per)
  const data = {
    labels: ['Online', 'Cash', 'Cheque','Demand Draft'],
    datasets: [
      {
        label: ' ',
        data: per,
        backgroundColor: [
          '#4318FF',
          '#6AD2FF',
          '#EFF4FB',
          "#be29ec"
          
        ],
       
       
      },
    ],
  };
  
  return <Pie data={data}  options={options} className="p-chart"/>;
}

