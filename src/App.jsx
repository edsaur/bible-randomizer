import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./pages/About";
import Bible from "./pages/Bible";
import BibleChapters from "./pages/BibleChapters";
import Homepage from "./pages/Homepage";
import Passages from "./pages/Passages";
import RandomVerse from "./pages/RandomVerse";
import Verse from "./pages/Verse";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="random-verse" element={<RandomVerse />} />
            <Route path="bible" element={<Bible />} />
            <Route path="bible/:book/chapters" element={<BibleChapters />} />
            <Route path="bible/:book/:chapter" element={<Passages />} />
            <Route path="bible/:book/:chapter/:verse" element={<Verse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
