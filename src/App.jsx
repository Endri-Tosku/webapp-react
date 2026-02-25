// importiamo le pages
import HomePage from "./pages/HomePage"
import MovieDetailPage from "./pages/MovieDetailPage"
import NotFoundPage from "./pages/NotFoundPage"

// importiamo il MainContent
import MainContent from "./layouts/MainContent"

// importiamo comp libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<MainContent />}>
          <Route index element={<HomePage />} />
          <Route path="/film/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
