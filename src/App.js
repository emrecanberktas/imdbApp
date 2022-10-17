import {
  Container,
  Row,
  Col,
  NextUIProvider,
  createTheme,
} from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import FilmCard from "./components/FilmCard";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const lightTheme = createTheme({
    type: "light",
  });

  const darkTheme = createTheme({
    type: "dark",
  });

  return (
    <NextUIProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Container lg>
        <div>
          <Navbar theme={theme} setTheme={setTheme} />
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
    </NextUIProvider>
  );
}

export default App;
