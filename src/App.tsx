import React, { useState } from "react";
import { Soccer } from "./soccer.model";
import players from "./soccer";
import "./App.css";
import BarChart from "./barchat";
import Plot from "react-plotly.js";

function App() {
  let [state, setState] = useState({
    soccerPlayers: players,
    selectedPlayer: {},
  });

  let { soccerPlayers } = state;
  let { selectedPlayer } = state;

  let detailedView = (name: string) => {
    console.log(name);
    soccerPlayers.map((player) => {
      if (player.Name === name) {
        // console.log(player);
        setState({
          ...state,
          selectedPlayer: player,
        });
        return player;
      }
    });
    console.log(selectedPlayer);
  };

  let barChart = (details: any) => {
    console.log(details);

    let X: any = [];
    let Y: any = [];

    X = Object.keys(details);
    Y = Object.values(details);

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
