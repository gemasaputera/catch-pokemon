import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import ListItem from "../../components/ListItem";
import {
  Container,
  Title,
  Subtitle,
  WrapperTitle,
  WrapperNavigation,
} from "./styles";

const Pokedex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("myPokemon")) {
      let arrMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));
      setMyPokemon(arrMyPokemon);
    }
  }, []);

  const handleRelease = (item) => {
    const filtered = myPokemon.filter((el) => el.nickname !== item.nickname);
    localStorage.setItem("myPokemon", JSON.stringify(filtered));
    setMyPokemon(filtered);
  };

  return (
    <Container>
      <WrapperTitle>
        <Title>Pokedex</Title>
        <Subtitle>The collection of pokemon you have.</Subtitle>
      </WrapperTitle>
      <ListItem
        title="Pokemon List"
        data={myPokemon}
        handleRelease={handleRelease}
        message="Looks like your pokedex is still empty, let's add your pokemon"
      />
      <WrapperNavigation>
        <Navigation />
      </WrapperNavigation>
    </Container>
  );
};

export default Pokedex;
