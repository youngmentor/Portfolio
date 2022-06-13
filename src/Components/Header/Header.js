import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Nelson Elaye</Logo>
        <a
          href="https://wa.me/message/CED24IACMYNVB1"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button>Let's chat</Button>
        </a>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 70px;
  box-shadow: 0 5px 3px #f2f2f2;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Button = styled.div`
  font-weight: 600;
  color: var(--green);
  font-size: 15px;
  border: 2.5px solid rgb(60, 179, 113);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    background-color: black;
    color: white;
    border: 2.5px solid black;
  }

  @media screen and (max-width: 425px) {
    padding: 8px 10px;
  }
`;
// const Container = styled.div``
