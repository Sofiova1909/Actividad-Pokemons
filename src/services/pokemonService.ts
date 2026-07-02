const API = "https://pokeapi.co/api/v2";


export const getPokemons = async () => {
    try {

        const response = await fetch(`${API}/pokemon?limit=150`);

        if (!response.ok) {
            throw new Error("Error al obtener los Pokémon");
        }

        const data = await response.json();

        const pokemons = await Promise.all(

            data.results.map(async (pokemon: any) => {

                const res = await fetch(pokemon.url);

                if (!res.ok) {
                    throw new Error(`Error al obtener ${pokemon.name}`);
                }

                const detail = await res.json();

                return {
                    id: detail.id,
                    name: detail.name,
                    image: detail.sprites.front_default,
                    type: detail.types[0].type.name,
                };

            })

        );

        return pokemons;

    } catch (error) {

        console.error(error);
        return [];

    }
};


export const getPokemon = async (name: string) => {
    try {

        const response = await fetch(`${API}/pokemon/${name}`);

        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        return await response.json();

    } catch (error) {

        console.error(error);
        return null;

    }
};