import React from "react";
import styled from "styled-components";
const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>What I've Built</Headline>
        <Cards>
          <Card>
            <ProjectImage>
              <img src="/assets/health360.png" />
            </ProjectImage>
            <Bottom>
              <Title>Health 360</Title>
              <Description>
                Health360 is a healthcare solution aimed
                at providing all round quality healthcare
                through an app
              </Description>
              <Aside>
                <Tools>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <a href="https://health-360-app.vercel.app/" target="_blank">
                  <View>View More </View>
                </a>
              </Aside>
            </Bottom>
          </Card>
          <Card>
            <ProjectImage>
              <img src="/assets/Exquisite.jpeg" />
            </ProjectImage>
            <Bottom>
              <Title>Exquisite-Clinic</Title>
              <Description>
                An Hospital record keeper that helps keep record of patient data
              </Description>
              <Aside>
                <Tools>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <a href="https://exquisite-physioteraphy-clinic.onrender.com" target="_blank">
                  <View>View More </View>
                </a>
              </Aside>
            </Bottom>
          </Card>
          <Card>
            <ProjectImage>
              <img src="/assets/API.png" />
            </ProjectImage>
            <Bottom>
              <Title>Festac Api</Title>
              <Description>
              Its an application used for creating a responsive blog ,that allows users to create ,edit and delete post
              </Description>
              <Aside>
                <Tools>
                  <Tool>NodeJS</Tool>
                  <Tool>ExpressJS</Tool>
                  <Tool>MongoDB</Tool>
                </Tools>
                <a href="https://festacapi.onrender.com" target="_blank">
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
  margin-left: 10px;
  transition: all 350ms;
  :hover {
    color: grey;
  }
`;
// const Tool = styled.div``
