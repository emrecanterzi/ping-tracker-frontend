import React from "react";
import Chart from "react-apexcharts";

interface IProps {
  responses: { responseTime: number; date: string }[];
}

const ResponseTimeChart = ({ responses }: IProps) => {
  return (
    <Chart
      options={{
        chart: {
          id: "responsetime",
        },
        xaxis: {
          categories: responses.map((response) =>
            new Date(response.date).toLocaleTimeString()
          ),
          range: 30,
        },
        yaxis: {
          max:
            Math.max.apply(
              null,
              responses.slice(-30).map((response) => response.responseTime)
            ) * 1.05,
        },
      }}
      series={[
        {
          name: "responsetime",
          data: responses.map((response) => response.responseTime),
        },
      ]}
      type="area"
      width="100%"
      height={"400"}
    />
  );
};

export default ResponseTimeChart;
