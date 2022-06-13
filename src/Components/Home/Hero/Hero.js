import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Overlay></Overlay>
      <Wrapper>
        <TextDiv>
          <Hello>Hello!</Hello>
          <Title>I'm a Fullstack Developer/Software Engineer</Title>
          <Bio>
            I use my tech super-powers and critical thinking ability to build
            software solutions and help businesses bring their idea to life.
          </Bio>
        </TextDiv>

        <ProfileImage>
          <img src="/assets/image1.jpg" />
        </ProfileImage>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  background: url("/assets/bg3.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  color: white;
  flex-wrap: wrap;
  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  justify-content: space-around;
  z-index: 5;

  @media screen and (max-width: 768px) {
    padding: 50px 30px 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //   flex: 0.5;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 690px) {
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
`;
const Hello = styled.div`
  background-color: white;
  color: black;
  padding: 8px 10px;
  font-weight: 600;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const Bio = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border: 5px solid rgb(60, 179, 113);
  border-radius: 100%;
  overflow: hidden;
  transition: all 1.5s;

  img {
    width: 100%;
    transition: all 1.5s;

    // :hover {
    //   transform: rotate(-360deg);
    // }
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

// const Overlay = styled.div``
