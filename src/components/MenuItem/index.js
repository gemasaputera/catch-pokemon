import React from "react";
import { ContainerItem, ContainerIcon, Title } from "./styles";
import { useHistory } from "react-router-dom";

const MenuItem = ({ menu }) => {
  const { Icon } = menu;
  const history = useHistory();

  const handleNavigate = (e) => {
    e.preventDefault();
    history.push(menu.url);
  };

  return (
    <ContainerItem onClick={handleNavigate}>
      <ContainerIcon>
        <Icon active={menu.active} />
      </ContainerIcon>
      <Title active={menu.active}>{menu.title}</Title>
    </ContainerItem>
  );
};

export default MenuItem;
