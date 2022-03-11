import React, { useState } from "react";
import players from "./soccer";
import "./App.css";
import BarChart from "./barchat";

function App() {
  let [state, setState] = useState({
    soccerPlayers: players,
  });

  let { soccerPlayers } = state;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
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
                    <tr>
                      <th scope="row">
                        <a href="#" className="stretched-link"></a>
                        {player.Name}
                      </th>
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
        <div className="col-md-4 mt-5">
          <h5>Player name</h5>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
