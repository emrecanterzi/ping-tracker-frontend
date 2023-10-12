import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

interface IProps {
  responses: { responseTime: number; date: string }[];
  isFormOpen: boolean;
}

const ResponseTimeChart = ({ responses, isFormOpen }: IProps) => {
  return (
    <Chart
      options={{
        chart: {
          id: "responsetime",
          toolbar: {
            show: !isFormOpen,
          },
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
