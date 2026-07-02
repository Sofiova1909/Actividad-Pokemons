import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "../services/pokemonService";

function Home() {

    const [pokemons, setPokemons] = useState<any[]>([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadPokemon();

    }, []);

    const filterPokemon = (pokemonName: string) => {

        setSearch(pokemonName);

    }

    const loadPokemon = async () => {

        const data = await getPokemons();

        setPokemons(data);

        setLoading(false);

    }

    const filteredPokemons = pokemons.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {

        return <h2>Cargando Pokémon...</h2>

    }

    return (

        <div className="container mt-4">

            <h1 className="text-center mb-4">
                🎮 Pokédex
            </h1>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Buscar Pokémon..."
                value={search}
                onChange={(e) => filterPokemon(e.target.value)}
            />

            <div className="row">

                {

                    filteredPokemons.map((pokemon: any) => (

                        <div
                            className="col-md-3 mb-4"
                            key={pokemon.id}
                        >

                            <PokemonCard

                                name={pokemon.name}

                                image={pokemon.image}

                                type={pokemon.type}

                            />

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default Home;