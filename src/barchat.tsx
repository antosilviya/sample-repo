import React, { Component } from "react";
import Plot from "react-plotly.js";

class BarChart extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              type: "bar",
              x: [
                "Ball-Control",
                "Dribbling",
                "Aggression",
                "Acceleration",
                "Speed",
                "cc",
              ],
              y: [255, 100, 150],
            },
          ]}
          layout={{ width: 300, height: 600, title: "sample barchart" }}
        ></Plot>
      </div>
    );
  }
}
export default BarChart;
