import { Container, Row, Col } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import FilmCard from "./components/FilmCard";
import Home from "./pages/Home";

function App() {
  return (
    <Container lg>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="series" element={<Series />} />
        </Routes>
        <FilmCard />
      </div>
    </Container>
  );
}

export default App;
