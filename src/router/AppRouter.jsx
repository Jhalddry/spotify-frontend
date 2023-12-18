import { Navigate, Route, Routes } from "react-router-dom"
import { SearchPage } from "../pages"
import { Navbar } from "../ui"
export const AppRouter = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="search" element={ <SearchPage /> } />

        <Route path="/" element={ <Navigate to="/search" /> } />
      </Routes>
    </>
  )
}

