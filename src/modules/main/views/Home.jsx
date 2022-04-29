import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* 
import { getAuth, signOut } from "firebase/auth";

import firebaseApp from "../../../firebase"; */

import { GlobalContext } from "../../../App";
import NewsCarousel from "../../../components/NewsCarousel";
import Aisle from "../../../components/Aisle";

const Home = ({ products }) => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();

  const { user } = ctx;

/*   const auth = getAuth(firebaseApp); */

/*   useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, [navigate, user]); */

/*   const logout = async (event) => {
    event.preventDefault();

    await signOut(auth);

    navigate("/");
  };

  const getIdToken = async () => {
    const idToken = await user.getIdToken();

    alert(idToken);
  }; */

  return (
    <div>
      <NewsCarousel />
      <Aisle products={products} />
    </div>
  );
}

export default Home;
