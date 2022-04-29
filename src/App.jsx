import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import "./App.css";

import firebaseApp from "./firebase";

import Header from "./components/Header";

import LoggedOut from "./modules/auth/views/LoggedOut";
import Login from "./modules/auth/views/Login";
import SendOTP from "./modules/auth/views/SendOTP";
import VerifyOTP from "./modules/auth/views/VerifyOTP";
import Home from "./modules/main/views/Home";
import OTP from "./modules/auth/views/OTP";
import Register from "./modules/user/views/Register";
import { products } from './utils/mock'


export const GlobalContext = React.createContext();

const filterProducts = (products, query) => {
  if (!query) {
      return products;
  }

  return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
  });
};

const App = () => {
  const [user, setUser] = useState(undefined);

  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredProducts = filterProducts(products, searchQuery);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ user }}>
        <Router>
          <Header
            user={user}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Routes>
            <Route path="/" element={<LoggedOut />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/otp/send" element={<SendOTP />} />
            <Route path="/otp/verify" element={<VerifyOTP />} />
            <Route path="/home" element={<Home user={user} products={filteredProducts}/>} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;