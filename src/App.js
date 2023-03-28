import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import BooksList from "./pages/BooksList"
import Book from "./pages/Book"
import { Link } from "react-router-dom";

function App() {
  return (


    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookslist">BooksList</Link>
        </li>
      </nav>

      <Routes >

        <Route path="/" element={<Home />}> </Route>
        <Route path="/booksList" element={<BooksList />}> </Route>
        <Route path="/book/:id" element={<Book />}> </Route>
      </Routes>
    </>
  )
}

export default App;
