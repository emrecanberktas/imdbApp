import { Container, Row, Col } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import FilmCard from "./components/FilmCard";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Container lg>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="films/:filmId" element={<FilmDetails />} />
          <Route path="series" element={<Series />}>
            <Route path="seriesId" element={<SeriesDetails />} />
          </Route>
        </Routes>
        <FilmCard />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
