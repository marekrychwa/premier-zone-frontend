import { useState } from "react";

type Props = {
  onSearch: (name: string) => void;
};

export default function PlayerSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        placeholder="Search player by name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => onSearch(value)}>
        Search
      </button>
    </div>
  );
}