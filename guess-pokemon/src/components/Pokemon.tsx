import { FormEvent, useEffect, useState } from "react";


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
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

const MATCH = Math.floor(Math.random() * Pokelist.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);
  const [score, setScore] = useState<number>(
    Number(sessionStorage.getItem('score')) || 0
  );

  function aumentarPuntuacion(): void {
    const nuevaPuntuacion = score + 1;
    sessionStorage.setItem('score', String(nuevaPuntuacion));
    setScore(nuevaPuntuacion);
  }
  
  function handleSubmit(event: FormEvent<Form>) {
    event.preventDefault();
    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === Pokelist[MATCH]) {
      toggleWon(true);
      aumentarPuntuacion()
      alert("You won!");
    } else {
      alert("W");
      pokemon.value = "";
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <p className="text--sub mt-4">
          {hasWon ? Pokelist[MATCH] : "Who's that pokemon?"}
        </p>
        <p className="text--normal">Score: {score}</p>
        <img
          height={412}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            MATCH + 1
          }.png`}
          style={{
            imageRendering: "pixelated",
            filter: `brightness(${hasWon ? 1 : 0})`,
            transition: "filter 0.5s",
             
            
          }}
          width={412}
          className={hasWon ? "" : " poke-img"}
        />

        {hasWon ? (
          <button onClick={() => location.reload()}> Play Again</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              name="pokemon"
              list="suggestions"
            ></input>
            <datalist id="suggestions">
              {Pokelist.map((p, i) => (
                <option key={i} value={p} />
              ))}
            </datalist>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

// crear lista de nombres de Pokemon
