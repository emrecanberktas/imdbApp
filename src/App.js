import { Container, NextUIProvider, createTheme } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Footer from "./components/Footer";
import FilmImages from "./pages/FilmImages";
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
    <NextUIProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container lg>
        <div>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="films" element={<Films />} />
            <Route path="films/:filmId" element={<FilmDetails />} />
            <Route path="films/:filmId/images" element={<FilmImages />} />
            <Route path="films/:filmId/videos" />
            <Route path="series" element={<Series />} />
            <Route path="seriesId" element={<SeriesDetails />} />
          </Routes>
          <Footer />
        </div>
      </Container>
    </NextUIProvider>
  );
}

export default App;
