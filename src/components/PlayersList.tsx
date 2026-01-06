import { useEffect, useState } from "react";
import { getPlayers } from "../services/api";
import type { Player } from "../services/api";

export default function PlayersList() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPlayers()
      .then(data => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading players...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Players</h2>

      {players.map(player => (
        <div key={player.playerName} className="player-card">
          <strong>{player.playerName}</strong>
          <div>{player.teamName}</div>
          <div>{player.position} · {player.nation}</div>
          <div>
            Matches: {player.matchesPlayed} | Goals: {player.goals} | Assists: {player.assists}
          </div>
        </div>
      ))}
    </div>
  );
}