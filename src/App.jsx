import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import AppLayout from "./ui/AppLayout";
import Homepage from './pages/Homepage';
import About from "./pages/About";
import RandomVerse from "./pages/RandomVerse";
import Bible from "./pages/Bible";
import Verse from "./pages/Verse";
import BibleBook from "./pages/BibleBook";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Navigate replace to='home'/>}/>
          <Route path="home" element={<Homepage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="random-verse" element={<RandomVerse/>} />
          <Route path="bible" element={<Bible/>} />
          <Route path="bible/:book/:chapter" element={<BibleBook/>}/>
          <Route path="verse/:book/:chapter/:verse" element={<Verse/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
