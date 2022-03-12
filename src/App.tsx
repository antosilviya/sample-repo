import React, { useState } from "react";

import players from "./soccer";

import Plot from "react-plotly.js";

function App() {
  let [state, setState] = useState({
    soccerPlayers: players.sort((a, b) => {
      return a.Name > b.Name ? -1 : b.Name > a.Name ? 1 : 0;
    }),
    selectedPlayer: {},
  });

  let { soccerPlayers, selectedPlayer } = state;

  let detailedView = (name: string) => {
    soccerPlayers.map((player) => {
      if (player.Name === name) {
        setState({
          ...state,
          selectedPlayer: player,
        });
        return player;
      }
    });
  };

  // Visualization Chart

  let barChart = (details: any) => {
    let X: string[] = [];
    let Y: number[] = [];

    const plotData = (({
      Ball_Control,
      Dribbling,
      Aggression,
      Acceleration,
      Speed,
      Shot_Power,
    }) => ({
      Ball_Control,
      Dribbling,
      Aggression,
      Acceleration,
      Speed,
      Shot_Power,
    }))(details);

    X = Object.keys(plotData);

    Y = Object.values(plotData);

    // Visualization chart is displayed only when any player is selected

    if (Object.keys(details).length > 0) {
      return (
        <div>
          <h5 className="text-center">{details.Name}</h5>
          <Plot
            data={[
              {
                type: "bar",
                x: X,
                y: Y,
              },
            ]}
            layout={{ width: 400, height: 600 }}
          ></Plot>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Nationality</th>
                  <th scope="col">National Position</th>
                  <th scope="col">Club</th>
                  <th scope="col">Height</th>
                  <th scope="col">Preffered_Foot</th>
                </tr>
              </thead>
              <tbody>
                {soccerPlayers.length > 0 &&
                  soccerPlayers.map((player) => {
                    return (
                      <tr key={player.Name}>
                        <th scope="col">
                          <input
                            type="radio"
                            name="selectedPlayer"
                            onClick={() => detailedView(player.Name)}
                          ></input>
                        </th>

                        <th scope="row">{player.Name}</th>
                        <td>{player.Nationality}</td>
                        <td>{player.National_Position}</td>
                        <td>{player.Club}</td>
                        <td>{player.Height}</td>
                        <td>{player.Preffered_Foot}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-4 mt-5">{barChart(selectedPlayer)}</div>
      </div>
    </div>
  );
}

export default App;
