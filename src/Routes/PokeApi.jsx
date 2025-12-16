import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Search from "../components/Search";
import {useState} from "react";

const queryClient = new QueryClient();

export default function PokeApi() {
  const [pokemon, setPokemon] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <Search onSearch={setPokemon} />
      <Example pokemon={pokemon} />
    </QueryClientProvider>
  );
}

function Example({pokemon}) {
  const {isPending, error, data} = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{" "}
      <strong> {data.stargazers_count}</strong>{" "}
      <strong> {data.forks_count}</strong>
    </div>
  );
}
