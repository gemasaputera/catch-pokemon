import React, { useEffect, useState } from "react";
import Item from "../Item";
import {
  Title,
  WrapperList,
  WrapperEmptyState,
  TextEmptyState,
  WrapperText,
  TextOwned,
  WrapperTextOwned,
  ContainerMore,
  Name,
} from "./styles";
import { useHistory } from "react-router-dom";
import EMPTY_STATE from "./../../static/illustration_empty_state.png";
import MoreIcon from "../Icons/MoreIcon";

const ListItem = ({
  title,
  message,
  data,
  isOwned,
  isOwnedItem,
  owned,
  handleMore,
  withMore,
}) => {
  const [myPokemon, setMyPokemon] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("myPokemon")) {
      let arrMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));
      setMyPokemon(arrMyPokemon);
    }
  }, [data]);

  if (data.length === 0) {
    return (
      <WrapperEmptyState>
        <img src={EMPTY_STATE} alt="empty data" width={198} />
        <TextEmptyState>{message}</TextEmptyState>
      </WrapperEmptyState>
    );
  }

  const onClickItem = (item) => {
    history.push(`/pokemon-detail?name=${item.name}`);
  };

  const ownedItem = (name) => {
    if (myPokemon.length > 0) {
      const selectedPokemonCount = myPokemon.filter((el) => el.name === name);
      return selectedPokemonCount.length;
    } else {
      return 0;
    }
  };

  const MoreItem = () => {
    return (
      <ContainerMore onClick={handleMore}>
        <MoreIcon />
        <Name>More</Name>
      </ContainerMore>
    );
  };

  return (
    <div>
      <WrapperText>
        <Title>{title}</Title>
        {isOwned && (
          <WrapperTextOwned>
            <TextOwned>{owned} Owned</TextOwned>
          </WrapperTextOwned>
        )}
      </WrapperText>
      <WrapperList>
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              data={item}
              isOwnedItem={isOwnedItem}
              ownedItem={ownedItem(item.name)}
              onClickItem={onClickItem}
            />
          );
        })}
        {withMore && <MoreItem />}
      </WrapperList>
    </div>
  );
};

export default ListItem;
