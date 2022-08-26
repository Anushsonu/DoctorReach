import React, { useState } from "react";
import Chart from "react-apexcharts";

export function ConsultationHistory() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "25 Aug",
          "26 Aug",
          "27 Aug",
          "28 Aug",
          "29 Aug",
          "30 Aug",
          "31 Aug",
        ],
      },
    },
    series: [
      {
        name: "In-person Visit",
        data: [200, 250, 350, 220, 198, 310, 250],
      },
      {
        name: "Online Visit1",
        data: [200, 150, 300, 280, 310, 260, 250],
      },
      {
        name: "Anytime Consult",
        data: [140, 210, 200, 160, 180, 170, 200],
      },
    ],
  });

  return (
    <div className="consultation-chart">
      <div className="consultation-history">ConsultationHistory</div>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="825px"
        height="360px"
      />
    </div>
  );
}
