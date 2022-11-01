import { Text } from "@nextui-org/react";
import TrendingActors from "../components/TrendingActors";
import TrendingMovies from "../components/TrendingMovies";
import TrendingSeries from "../components/TrendingSeries";

function Home() {
  return (
    <div>
      <Text h3>Trending Movies</Text>
      <TrendingMovies />
      <br />
      <Text h3>Trending Series</Text>
      <TrendingSeries />
      <br />
      <Text h3>Trending Actors</Text>
      <TrendingActors />
    </div>
  );
}

export default Home;
