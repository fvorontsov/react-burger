import React from "react";
import "../../App.css";
import { AppHeader } from "../app-header/AppHeader";
import { MainContainer } from "../main-container/MainContainer";
import { normaApiClient } from "../../service/NormaApiClient";

export const App = () => {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    normaApiClient
      .fetchIngredients()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <MainContainer ingredients={ingredients} />
    </div>
  );
};
