import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Overlay></Overlay>
      <Wrapper>
        <TextDiv>
          <Hello>Hello!</Hello>
          <Title>I'm a Joshua Aninku</Title>
          <Bio>
            A Backend Developer with a proven track record of developing efficient and secure web applications. Extensive knowledge of programming  languages  to create robust software solutions. Adept at troubleshooting and debugging applications to ensure optimal performance
          </Bio>
          <ButtonDiv>
            <a
              href="https://wa.me/8143192174"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button>Let's chat</Button>
            </a>
            <a href="./assets/Resume.pdf" download="Resume" style={{ textDecoration: 'none' }}>
              <Button1>
                Download Resume
              </Button1>
            </a>
          </ButtonDiv>
        </TextDiv>

        <ProfileImage>
          <img src="/assets/A.jpeg" />
        </ProfileImage>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`
const Button = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--green);
  font-size: 15px;
  /* border: 2.5px solid rgb(60, 179, 113); */
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 350ms;
  margin-top: 20px;
  background-color: white;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
const Button1 = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--green);
  font-size: 15px;
  border: 1px solid rgb(60, 179, 113);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 350ms;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 425px) {
    width: 100px;
    font-size: 12px;
    height: 18px;
  }
`
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
  background-color: rgba(0, 0, 0, 0.9);
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
  font-weight:800;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const Bio = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  /* border: 3px solid rgb(60, 179, 113); */
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
