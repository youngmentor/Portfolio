import React from "react";
import styled from "styled-components";
const Tools = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>What I Use</Headline>
        <Stacks>
          <Stack>
            <Image src="/assets/java.png" />
            <Title>Javascript</Title>
            <Description>Javascript is a programming language use for building web Application</Description>
          </Stack>
          <Stack>
            <Image src="/assets/react 2.png" />
            <Title>ReactJS</Title>
            <Description>
              A Javascript frontend library for building complex UIs
            </Description>
          </Stack>
          <Stack>
            <Image src="/assets/Typescript.png" />
            <Title>Typescript</Title>
            <Description>
              TypeScript is a statically-typed superset of JavaScript that enhances the capabilities of JavaScript by adding static typing to the language
            </Description>
          </Stack>
          <Stack>
            <Image src="/assets/redux.png" />
            <Title>Redux</Title>
            <Description>A State-Management library for ReactJs</Description>
          </Stack>
          <Stack>
            <Image src="/assets/postman.png" />
            <Title>Postman</Title>
            <Description>A software tool for testing APIs</Description>
          </Stack>
          <Stack>
            <Image src="/assets/mongodb2.png" />
            <Title>MongoDB</Title>
            <Description>A cloud database management platform</Description>
          </Stack>
          <Stack>
            <Image src="/assets/figma.jpeg" />
            <Title>Figma</Title>
            <Description>
              A software tool for designing top-notch web products and platform
            </Description>
          </Stack>
        </Stacks>
      </Wrapper>
    </Container>
  );
};

export default Tools;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  width: 90%;

  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  z-index: 5;
`;

const Headline = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
  color: rgb(60, 179, 113);
`;
const Stacks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
const Stack = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  margin: 20px;
  @media screen and (max-width: 425px) {
    margin-bottom: 15px;
  }
`;
const Image = styled.img`
  width: 120px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;
const Description = styled.div`
  font-size: 15px;
  text-align: center;
  // color: rgb(169, 169, 169);
  color: grey;
`;
// const Stack = styled.div``
