import React, { useState, useCallback, useEffect } from "react";
import Pokeball from "../Icons/Pokeball";
import Pokedex from "../Icons/Pokedex";
import MenuItem from "../MenuItem";
import { ContainerMenu } from "./styles";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  let location = useLocation();
  const [menus, setMenus] = useState([
    {
      title: "Pokemon",
      url: "/",
      Icon: Pokeball,
    },
    {
      title: "Pokedex",
      url: "/pokedex",
      Icon: Pokedex,
    },
  ]);

  const handleModifyMenu = useCallback(() => {
    const modifyMenu = [];
    menus.map((menu) => {
      if (menu.url === location.pathname) {
        return modifyMenu.push({ ...menu, active: true });
      } else {
        return modifyMenu.push({ ...menu, active: false });
      }
    });
    setMenus(modifyMenu);
  }, [location.pathname, menus]);

  useEffect(() => {
    handleModifyMenu();
  }, []);

  return (
    <ContainerMenu>
      {menus.map((menu, i) => {
        return <MenuItem key={i} menu={menu} />;
      })}
    </ContainerMenu>
  );
};

export default Navigation;
