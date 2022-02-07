import { useEffect, useState } from "react";
import "./App.css";
import { getAllCharacters } from "./Api/api";
import { getOneCharacter } from "./Api/api2";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then((data) => setCharacters(data));
  }, []);
  // useEffect(() => {
  //   getOneCharacter().then((data) => setCharacters(data));
  // }, []);

  return (
    <div className="container">
      <h1> Rick and Morty App</h1>
      <select>
        <option> -- Select a Character --</option>
        {characters.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
