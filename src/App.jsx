

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";

import About from "./pages/About";
import Winery  from "./pages/Winery";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/Winery" element={<Winery />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/signIn" element={<SignIn />} />
            <Route exact path="/Customer support" element={<Error />} />
            <Route exact path="/*" element={<Error />} />
            <Route
               exact
               path="/success"
               element={<ProtectedRoute element={<Success />} />}
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;