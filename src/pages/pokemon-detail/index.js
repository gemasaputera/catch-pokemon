import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMON_DETAIL } from "../../graphql/Queries";
import LeftArrow from "../../components/Icons/LeftArrow";
import { ProgressBarLine } from "react-progressbar-line";
import Skeleton from "react-loading-skeleton";
import {
  TopNavigation,
  TopTitle,
  Container,
  PokemonName,
  WrapperType,
  TypeText,
  WrapperImage,
  IdText,
  PokemonImage,
  PokemonAbilities,
  TitleAbilities,
  Divider,
  Row,
  TextAbilities,
  ValueAbilities,
  WrapperDialog,
  TitleDialog,
  PokemonNameDialog,
  WrapperDialogInput,
} from "./styles";
import Pokeball from "../../components/Pokeball";
import Dialog from "../../components/Dialog";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import RUN_AWAY from "./../../static/illustration_run_away.png";

const Detail = () => {
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const parsing = search !== "" && search.split("?name=");
  const { error, loading, data } = useQuery(LOAD_POKEMON_DETAIL, {
    variables: { name: parsing[1] },
  });

  const [pokemon, setPokemon] = useState(null);
  const [luck, setLuck] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    if (!loading && data) {
      setPokemon(data.pokemon);
      setNickName(data.pokemon.name);
    }
  }, [data, loading]);

  const handleCatch = () => {
    setOpenDialog(true);
    if (luck) {
      setLuck(false);
    } else {
      setLuck(true);
    }
  };

  const handleChange = (e) => {
    setNickName(e.target.value);
  };

  const handleSavePokedex = () => {
    let filter;
    let value = [];
    if (myPokemon) {
      filter = myPokemon.filter((el) => el.name === nickName);
      if (filter.length > 0) {
        alert(`${nickName} was registered try another nickname!`);
      } else {
        value = [...myPokemon];
        value.push({
          ...data.pokemon,
          nickname: nickName,
          image: data.pokemon.sprites.front_default,
        });
        localStorage.setItem("myPokemon", JSON.stringify(value));
      }
    } else {
      value.push({
        ...data.pokemon,
        nickname: nickName,
        image: data.pokemon.sprites.front_default,
      });
      localStorage.setItem("myPokemon", JSON.stringify(value));
    }
    setOpenDialog(false);
    setNickName(data.pokemon.name);
  };

  if (loading) {
    return (
      <div>
        <TopNavigation>
          <div onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
            <LeftArrow />
          </div>
          <TopTitle>Pokemon Detail</TopTitle>
        </TopNavigation>
        <Container>
          <WrapperImage>
            <Skeleton circle={true} height={350} width={350} />
          </WrapperImage>
          <Skeleton count={10} />
        </Container>
      </div>
    );
  }

  if (error) {
    console.log(`error => `, error);
  }

  const renderDialog = () => {
    if (!luck) {
      return (
        <Dialog open={openDialog} handleClose={() => setOpenDialog(false)}>
          <WrapperDialog>
            <WrapperImage>
              <PokemonImage
                src={RUN_AWAY}
                alt={pokemon && pokemon.name}
                style={{ height: 145, width: 145 }}
              />
            </WrapperImage>
            <TitleDialog>Oh no!!!</TitleDialog>
            <PokemonNameDialog>
              <span style={{ textTransform: "capitalize" }}>
                {pokemon && pokemon.name}
              </span>{" "}
              has run away
            </PokemonNameDialog>
            <Button title="Close" onClick={() => setOpenDialog(false)} />
          </WrapperDialog>
        </Dialog>
      );
    }

    return (
      <Dialog open={openDialog} handleClose={() => setOpenDialog(false)}>
        <WrapperDialog>
          <WrapperImage>
            <PokemonImage
              src={pokemon && pokemon.sprites.front_default}
              alt={pokemon && pokemon.name}
              style={{ height: 145, width: 145 }}
            />
          </WrapperImage>
          <TitleDialog>Gotcha!</TitleDialog>
          <PokemonNameDialog>
            <span style={{ textTransform: "capitalize" }}>
              {pokemon && pokemon.name}
            </span>{" "}
            was caught
          </PokemonNameDialog>
          <WrapperDialogInput>
            <TextInput
              label="Give a name for your pokemon"
              onChange={handleChange}
              placeholder={pokemon && pokemon.name}
              value={nickName}
            />
          </WrapperDialogInput>
          <Button
            disabled={nickName === ""}
            title="Register to Pokedex"
            onClick={handleSavePokedex}
          />
        </WrapperDialog>
      </Dialog>
    );
  };

  return (
    <div style={{ position: "relative", paddingBottom: 120 }}>
      <TopNavigation>
        <div onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
          <LeftArrow />
        </div>
        <TopTitle>Pokemon Detail</TopTitle>
      </TopNavigation>
      <Container>
        <PokemonName>
          {pokemon && pokemon.name}
          {pokemon && pokemon.nickname && `/ ${pokemon && pokemon.nickname}`}
        </PokemonName>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flex: 1 }}>
            {pokemon &&
              pokemon.types.map((item, i) => {
                return (
                  <WrapperType key={i}>
                    <TypeText>{item.type.name}</TypeText>
                  </WrapperType>
                );
              })}
          </div>
          <IdText>#{pokemon && pokemon.id}</IdText>
        </div>
        <WrapperImage>
          <PokemonImage
            src={pokemon && pokemon.sprites.front_default}
            alt={pokemon && pokemon.name}
          />
        </WrapperImage>
        <PokemonAbilities>
          <div>
            <TitleAbilities>Stats</TitleAbilities>
            <Divider />
          </div>
          {pokemon &&
            pokemon.stats.map((status, i) => {
              return (
                <Row key={i}>
                  <TextAbilities>{status.stat.name}</TextAbilities>
                  <h5 style={{ margin: 0, marginRight: 20 }}>
                    {status.base_stat}
                  </h5>
                  <ValueAbilities>
                    <ProgressBarLine text={` `} value={status.base_stat} />
                  </ValueAbilities>
                </Row>
              );
            })}
          <div style={{ marginTop: 20 }}>
            <TitleAbilities>About</TitleAbilities>
            <Divider />
          </div>
          <Row>
            <TextAbilities>Weight</TextAbilities>
            <ValueAbilities>
              {pokemon && (pokemon.weight / 100).toFixed(2)} kg
            </ValueAbilities>
          </Row>
          <Row>
            <TextAbilities>Height</TextAbilities>
            <ValueAbilities>{pokemon && pokemon.height / 10} m</ValueAbilities>
          </Row>
          <div style={{ marginTop: 20 }}>
            <TitleAbilities>Abilities</TitleAbilities>
            <Divider />
          </div>
          {pokemon &&
            pokemon.abilities.map((ability, i) => {
              return (
                <Row key={i}>
                  <TextAbilities>{ability.ability.name}</TextAbilities>
                </Row>
              );
            })}
          <div style={{ marginTop: 20 }}>
            <TitleAbilities>Move</TitleAbilities>
            <Divider />
          </div>
          <div
            style={{
              display: "grid",
              gridGap: "10px",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
              marginBottom: 10,
            }}
          >
            {pokemon &&
              pokemon.moves.map((move, i) => {
                return (
                  <div
                    key={i}
                    style={{ padding: "8px 12px", border: "1px solid #eee" }}
                  >
                    <TextAbilities>{move.move.name}</TextAbilities>
                  </div>
                );
              })}
          </div>
        </PokemonAbilities>
      </Container>
      {!openDialog && <Pokeball data={pokemon} handleCatch={handleCatch} />}
      {openDialog && renderDialog()}
    </div>
  );
};

export default Detail;
