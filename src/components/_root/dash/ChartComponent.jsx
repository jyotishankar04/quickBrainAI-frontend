// ChartComponent.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = ({ chartData, chartTitle }) => {
  // Transform the data format for Recharts
  const rechartsData = chartData.labels.map((label, index) => ({
    name: label,
    value: chartData.values[index],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="text-center font-medium mb-2">{chartTitle}</h3>
      <ResponsiveContainer>
        <BarChart
          data={rechartsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            name={chartTitle}
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
