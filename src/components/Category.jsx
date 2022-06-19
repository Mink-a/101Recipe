import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <List>
      <NavLink to={"/crusine/italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={"/crusine/american"}>
        <FaHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink to={"/crusine/chinese"}>
        <GiNoodles />
        <h3>Chinese</h3>
      </NavLink>
      <NavLink to={"/crusine/thai"}>
        <GiChopsticks />
        <h3>Thai</h3>
      </NavLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 1rem;
`;
