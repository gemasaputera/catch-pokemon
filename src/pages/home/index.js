import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import Navigation from "../../components/Navigation";
import {
  Container,
  Title,
  Subtitle,
  WrapperTitle,
  WrapperNavigation,
} from "./styles";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMON_LIST } from "../../graphql/Queries";

const Home = () => {
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const [limit, setLimit] = useState(30);
  const [ownPokemon, setOwnPokemon] = useState(0);

  const { error, loading, data } = useQuery(LOAD_POKEMON_LIST, {
    variables: { limit: limit, offset: 0 },
  });

  useEffect(() => {
    if (!loading && data) {
      setListPokemon(data.pokemons.results);
    }
  }, [data, loading, myPokemon]);

  useEffect(() => {
    if (myPokemon) {
      setOwnPokemon(myPokemon.length);
    }
  }, [data, loading, myPokemon]);

  const [listPokemon, setListPokemon] = useState([]);

  if (loading) {
    console.log(`loading => `, loading);
  }

  if (error) {
    console.log(`error => `, error);
  }

  return (
    <Container>
      <WrapperTitle>
        <Title>Hi Master</Title>
        <Subtitle>Welcome back to Pokemon World.</Subtitle>
      </WrapperTitle>
      <ListItem
        title="Pokemon List"
        data={listPokemon}
        message="Looks like your pokedex is still empty, let's add your pokemon"
        isOwned
        isOwnedItem
        owned={ownPokemon}
        withMore
        handleMore={() => setLimit(limit + 30)}
      />
      <WrapperNavigation>
        <Navigation />
      </WrapperNavigation>
    </Container>
  );
};

export default Home;
