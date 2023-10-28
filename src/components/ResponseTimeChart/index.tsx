import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import domtoimage from "dom-to-image";
import styles from "./style.module.scss";

interface IProps {
  responses: { responseTime: number; date: string }[];
  jobTitle: string;
}

const ResponseTimeChart = ({ responses, jobTitle }: IProps) => {
  const [panelSettings, setPanelSettings] = useState({
    isOpen: false,
    X: 0,
    Y: 0,
  });

  const downloadChartImg = (type: string) => {
    const download = (dataUrl: string) => {
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.style.display = "none";
      downloadLink.download = jobTitle;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      window.URL.revokeObjectURL(dataUrl);
      document.body.removeChild(downloadLink);
    };
    const chart = document.getElementById("chart");
    if (chart) {
      if (type === "PNG") {
        domtoimage.toPng(chart).then((dataUrl: string) => {
          download(dataUrl);
        });
      } else if (type === "JPEG") {
        domtoimage.toJpeg(chart).then((dataUrl: string) => {
          download(dataUrl);
        });
      }
    }
  };

  const avg =
    responses.reduce((acc, response) => acc + response.responseTime, 0) /
    responses.length;

  const togglePanel: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setPanelSettings({
      isOpen: !panelSettings.isOpen,
      X: e.pageX,
      Y: e.pageY - 50,
    });
  };
  const closePanel = () => {
    setPanelSettings({ ...panelSettings, isOpen: false });
  };

  const contextmenuListener = (event: MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", contextmenuListener);

    return () => {
      document.removeEventListener("contextmenu", contextmenuListener);
    };
  });

  return (
    <div onAuxClick={togglePanel} onClick={closePanel}>
      {panelSettings.isOpen && (
        <div
          className={styles.panel}
          style={{ top: panelSettings.Y, left: panelSettings.X }}
        >
          <button
            onClick={() => downloadChartImg("JPEG")}
            className={styles.downloadBtn}
          >
            Download Chart As JPEG
          </button>
          <div className={styles.hr}></div>
          <button
            onClick={() => downloadChartImg("PNG")}
            className={styles.downloadBtn}
          >
            Download Chart As PNG
          </button>
        </div>
      )}
      <div id="chart">
        <ResponsiveContainer width={"100%"} height={400}>
          <AreaChart
            data={responses.map((response) => ({
              ...response,
              date: new Date(response.date).toLocaleTimeString(),
            }))}
          >
            <XAxis dataKey="date" />
            <YAxis domain={[0, Number((avg * 2).toFixed(2))]} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="responseTime"
              stroke="#6384eb"
              strokeLinecap="butt"
              fill="#6384eb"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResponseTimeChart;
