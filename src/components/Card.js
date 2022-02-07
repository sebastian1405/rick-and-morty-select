import React from "react";

export default function Card({ character }) {
  return (
    <div>
      <img src={character.image} alt="character"></img>
      <p>{character.name}</p>
    </div>
  );
}
