import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <PlayersList />
      </main>
    </>
  );
}