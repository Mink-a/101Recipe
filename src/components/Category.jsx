import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <List>
      <SLink to={"/crusine/italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </SLink>
      <SLink to={"/crusine/american"}>
        <FaHamburger />
        <h3>American</h3>
      </SLink>
      <SLink to={"/crusine/chinese"}>
        <GiNoodles />
        <h3>Chinese</h3>
      </SLink>
      <SLink to={"/crusine/thai"}>
        <GiChopsticks />
        <h3>Thai</h3>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  h3 {
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;
