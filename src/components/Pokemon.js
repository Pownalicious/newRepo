import React from "react";

export default function Pokemon(props) {
  console.log(props.abilities);
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terryfying ? "Nope" : "Loveablye"}</p>
      <p>Abilities: {props.abilities}</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
