import TopBar from "./component/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieListPage from "./page/MovieListPage";
import About from "./page/About";
import Home from "./page/Home";
import GridView from "./meme/GridView";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/memes" element={<GridView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
