import React from "react";
import styled from "styled-components";
const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>What I've Built</Headline>
        <Cards>
          <Card style={{ display: "none" }}>
            <ProjectImage>
              <img src="/assets/notely.jpg" />
            </ProjectImage>

            <Bottom>
              <Title>Notely</Title>
              <Description>
                Never forget a thing. Store important notes anytime, access them
                anywhere.
              </Description>
              <Aside>
                <Tools>
                  <Tool>ReactJS</Tool>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <View>View More </View>
              </Aside>
            </Bottom>
          </Card>
          <Card>
            <ProjectImage>
              <img src="/assets/pilot.jpg" />
            </ProjectImage>

            <Bottom>
              <Title>Pilot Partners</Title>
              <Description>
                A database of Fintech companies in Nigeria
              </Description>
              <Aside>
                <Tools>
                  <Tool>ReactJS</Tool>
                  <Tool>Redux</Tool>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <a href="https://pilotpartners-app.web.app/" target="_blank">
                  <View>View More </View>
                </a>
              </Aside>
            </Bottom>
          </Card>
          <Card style={{ display: "none" }}>
            <ProjectImage>
              <img src="/assets/youtube.jpg" />
            </ProjectImage>

            <Bottom>
              <Title>Youtube Clone</Title>
              <Description>A clone of youtube platform</Description>
              <Aside>
                <Tools>
                  <Tool>ReactJS</Tool>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                </Tools>
                <View>View More </View>
              </Aside>
            </Bottom>
          </Card>
          <Card>
            <ProjectImage>
              <img src="/assets/uquote.jpg" />
            </ProjectImage>

            <Bottom>
              <Title>Uquote</Title>
              <Description>
                An application for saving your favorite quotes.
              </Description>
              <Aside>
                <Tools>
                  <Tool>ReactJS</Tool>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <a href="https://uquote.netlify.app" target="_blank">
                  <View>View More </View>
                </a>
              </Aside>
            </Bottom>
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Projects;

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
  justify-content: center;
  z-index: 5;
`;

const Headline = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
  color: rgb(60, 179, 113);
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 100%;
  min-height: 425px;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 5px 5px 2px -3px #f2f2f2;
  box-sizing: border-box;
  //   background: red;

  @media screen and (max-width: 425px) {
    margin: 15px 0;
    width: 280px;
  }
`;
const ProjectImage = styled.div`
width:100%;
height: 200px;
// border: 2px solid rgb(60, 179, 113);
overflow: hidden;
transition: all 1.5s;


img {
  width: 100%;
height: 100%;
object-fit: cover;

  transition: all 1.5s;

  
`;

const Bottom = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;
const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: grey;
`;
const Aside = styled.div`
  margin: 30px 0 20px;
  display: flex;
  //   align-items: center;
  box-sizing: border-box;
`;
const Tools = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  box-sizing: border-box;
`;
const Tool = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(60, 179, 113, 0.15);
  box-sizing: border-box;
`;
const View = styled.div`
  font-size: 15px;
  color: var(--green);
  font-weight: 500;
  cursor: pointer;
  margin-left; 10px;
  transition: all 350ms;
  :hover {
    color: grey;
  }
`;
// const Tool = styled.div``
