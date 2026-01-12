import { useEffect, useState } from "react";
import { getPlayers } from "../services/api";
import TeamsList from "../components/TeamsList";

export default function TeamsPage() {
  const [teams, setTeams] = useState<string[]>([]);

  useEffect(() => {
    getPlayers().then(players => {
      const uniqueTeams = Array.from(
        new Set(players.map(p => p.teamName))
      );
      setTeams(uniqueTeams);
    });
  }, []);

  return (
    <div className="teams-page">
      <h1>Teams</h1>
      <TeamsList teams={teams} />
    </div>
  );
}