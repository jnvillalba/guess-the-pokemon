import { FormEvent, useState } from "react";

const Pokelist = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran",
  "nidorina",
  "nidoqueen",
  "nidoran",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetchd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
];

const MATCH = Math.floor(Math.random() * Pokelist.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);
  function handleSubmit(event: FormEvent<Form>) {
    event.preventDefault();
    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === Pokelist[MATCH]) {
      toggleWon(true);
      alert("You won!");
    } else {
      alert("Wrong!");
      pokemon.value == "";
    }
  }
  return (
    <div className="container">
      <img
        height={412}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : " grayscale(100) brightness(50) invert(1)  ",
        }}
        width={412}
        className="img-left"
      />
      <div className="left">
        {hasWon ? (
          <button onClick={() => location.reload()}> Play Again</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input autoFocus type="text" name="pokemon"></input>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
// crear lista de nombres de Pokemon
