import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Bible from "./pages/Bible";
import BibleChapters from "./pages/BibleChapters";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Passages from "./pages/Passages";
import RandomVerse from "./pages/RandomVerse";
import ResendConfirmation from "./pages/ResendConfirmation";
import Signup from "./pages/Signup";
import SuccessSignup from "./pages/SuccessSignup";
import Verse from "./pages/Verse";
import AppLayout from "./ui/AppLayout";
// import AuthListener from "./features/authentication/AuthenticationProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false, // Prevents refetching when switching tabs
    },
  },
});

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
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="confirm-email" element={<SuccessSignup />} />
          <Route path="resend-confirmation" element={<ResendConfirmation />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
