import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../services/pokemonService";

function PokemonDetail() {

    const { name } = useParams();

    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {

        if (name) {
            loadPokemon(name);
        }

    }, [name]);

    const loadPokemon = async (pokemonName: string) => {

        const data = await getPokemon(pokemonName);

        setPokemon(data);

    };

    if (!pokemon) {
        return <h2>Cargando...</h2>;
    }

    return (

        <div className="container mt-4">

            <h1>{pokemon.name.toUpperCase()}</h1>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />

            <h3>Información</h3>

            <p>
                <strong>ID:</strong> {pokemon.id}
            </p>

            <p>
                <strong>Altura:</strong> {pokemon.height}
            </p>

            <p>
                <strong>Peso:</strong> {pokemon.weight}
            </p>

            <p>
                <strong>Experiencia Base:</strong> {pokemon.base_experience}
            </p>

            <p>
                <strong>Tipos:</strong>{" "}
                {pokemon.types.map((t: any) => t.type.name).join(", ")}
            </p>

            <p>
                <strong>Habilidades:</strong>{" "}
                {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
            </p>

        </div>

    );

}

export default PokemonDetail;