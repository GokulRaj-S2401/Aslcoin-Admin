import React from 'react';
import Chart from 'react-apexcharts';

const DateTimeAreaChart = () => {

  const series = [{
    data: [
      { x: new Date('2024-01-01').getTime(), y: 10 },
      { x: new Date('2024-01-02').getTime(), y: 20 },
      { x: new Date('2024-01-03').getTime(), y: 45 },
      { x: new Date('2024-01-04').getTime(), y: 33 },
      { x: new Date('2024-01-05').getTime(), y: 35 },
      { x: new Date('2024-01-06').getTime(), y: 12 },
      { x: new Date('2024-01-07').getTime(), y: 5 },


      // Add more data points as needed
    ],
    color: '#0CAF60',
  }];

  const options = {
      chart: {
        type: "area",
        toolbar: {
          show: false, // Set to false to hide the menu icon
        },
      },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (value) {
          const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const date = new Date(value);
          return days[date.getUTCDay()];
        },
      },
    },
    yaxis:{
        style: {
            fontSize: "12px", // Adjust the font size as needed
            fontWeight: "normal",
            textDecoration: "none",
            fontStyle: "normal",
            colors: ["#fff"], // Array of colors for each category
          },
    },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity:0,
          opacityFrom: 1,
          opacityTo: 0.001,
          stops: [0, 90]
        }
      },
      grid: {
        show: true,
        borderColor: '#242D3999'
      },
      tooltip: {
        theme: 'dark', // Set the theme to light for a white background
        // style: {
        //   background: '#ffffff', // Set the background color to white
        //   color: '#000000', // Set the text color
        // },
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
  };

  return (
    <div >
        <div className='flex justify-between px-5 mb-5'>
            <h6 className='text-base font-semibold'>Portflio Stats</h6>
            <div className='flex gap-3'>
                <button className='px-3 py-1 border border-green-600 bg-[#33d44966] text-xs text-[#c2c2c2]  rounded-xl'>All</button>
                <button className='px-3 py-1 border border-gray-600 bg-background  text-xs text-[#c2c2c2] rounded-xl'>1M</button>
                <button className='px-3 py-1 border border-gray-600 bg-background  text-xs text-[#c2c2c2] rounded-xl'>6M</button>
                <button className='px-3 py-1 border border-gray-600 bg-background  text-xs text-[#c2c2c2] rounded-xl'>1Y</button>
                <button className='px-3 py-1 border border-gray-600 bg-background  text-xs text-[#c2c2c2] rounded-xl'>YTD</button>

            </div>
        </div>

      <Chart options={options} series={series} type="area" width={899} height={352} />
    </div>
  );
};

export default DateTimeAreaChart;