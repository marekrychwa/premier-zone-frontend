export interface Player {
  playerName: string;
  teamName: string;
  nation: string;
  position: string;
  age: string;
  matchesPlayed: number;
  goals: number;
  assists: number;
}

const API_URL = "http://127.0.0.1:8083/api/v1";

export async function getPlayers(): Promise<Player[]> {
  const response = await fetch(`${API_URL}/player`);

  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }

  return response.json();
}