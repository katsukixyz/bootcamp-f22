import { useEffect, useState } from "react";
const usePokemonData = (index) => {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [index]);
  return pokemonData;
};

export { usePokemonData };
