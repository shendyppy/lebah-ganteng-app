import { useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import MovieView from "../components/MovieView";
import TvSerialView from "../components/tvSerialView";
import CarouselHome from "../components/CarouselHome";
import { FETCH_ALL } from "../graphql";

function Home() {
  const { loading, error, data } = useQuery(FETCH_ALL);

  const bestMovies = data?.Movies?.filter((movie) => movie.popularity > 8.5);
  const bestTvSeries = data?.tvSeries?.filter((tv) => tv.popularity > 8.5);

  const isHome = true;

  if (loading) {
    return (
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_qj8z8rwa.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    );
  }

  if (error) {
    return (
      <lottie-player
        src="https://assets3.lottiefiles.com/private_files/lf30_3scgfuxp.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    );
  }

  return (
    <>
      <CarouselHome
        bestMovies={bestMovies}
        bestTvSeries={bestTvSeries}
        isHome={isHome}
      />
      <div style={{ marginTop: "2%", marginLeft: "7.5%", marginRight: "7.5%" }}>
        <h1 style={{ marginBottom: "1%", color: "white" }}>Movies</h1>
        <Row xs={1} md={5} className="g-4">
          {data.Movies.map((movie, index) => (
            <MovieView movie={movie} key={index} />
          ))}
        </Row>
      </div>
      <div style={{ marginTop: "2%", marginLeft: "7.5%", marginRight: "7.5%" }}>
        <h1 style={{ marginBottom: "1%", color: "white" }}>TV Series</h1>
        <Row xs={1} md={5} className="g-4">
          {data.tvSeries.map((tv, index) => (
            <TvSerialView tv={tv} key={index} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
