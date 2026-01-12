import type { Player } from "../services/api";
//import TeamCard from "./TeamCard";

type Props = {
  players: Player[];
};

export default function TeamsList({ players }: Props) {
  const teams = players.reduce<Record<string, Player[]>>((acc, player) => {
    const team = player.teamName;

    if (!acc[team]) {
      acc[team] = [];
    }

    acc[team].push(player);
    return acc;
  }, {});

  return (
    <div>
      <h2>Teams</h2>

      {Object.entries(teams).map(([teamName, teamPlayers]) => (
        <div key={teamName} style={{ marginBottom: "30px" }}>
          <h3>{teamName}</h3>

          {teamPlayers.map(player => (
            <div key={player.playerName} style={{ marginLeft: "20px" }}>
              {player.playerName} ({player.position})
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}