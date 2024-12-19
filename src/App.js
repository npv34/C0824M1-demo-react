import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BookList from "./components/Books/BookList/BookList";
import {Route, Routes} from "react-router";
import BookAdd from "./components/Books/BookAdd/BookAdd";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import BookEdit from "./components/Books/BookEdit/BookEdit";

function App() {

  return (
      <>
          <Routes>
              <Route path="/admin" element={<Layout />} >
                  <Route path="books" element={<BookList />} />
                  <Route path="books/create" element={<BookAdd />} />
                  <Route path="books/:id/edit" element={<BookEdit />} />
              </Route>
              <Route path="/login" element={<Login />} />
          </Routes>
      </>
  );
}

export default App;
