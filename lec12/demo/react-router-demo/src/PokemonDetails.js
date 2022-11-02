import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const params = useParams();
  console.log(params);
  const { pokemonId } = params;

  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [pokemonId]);

  const { name, sprites } = pokemonData;

  return (
    <div>
      <div>
        <p>{name}</p>
        <img src={sprites?.other["official-artwork"]["front_default"]}></img>
      </div>
    </div>
  );
};
export default PokemonDetails;
