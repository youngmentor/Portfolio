import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentDate = new Date();

  // Get the current year from the date
  const currentYear = currentDate.getFullYear();
  return (
    <Container>
      <Wrapper>
        <Logos>
          <a href="https://www.linkedin.com/in/aninku-oluwatimilehin-569202232" target="_blank">
            <Linkedin src="/assets/linkedin-logo1.png" />
          </a>
          <a href="https://github.com/aninkud2" target="_blank">
            <Github src="/assets/git.png" />
          </a>

          <a
            href="https://web.facebook.com/aninkut?mibextid=ZbWKwL"
            target="_blank"
          >
            <Facebook src="/assets/facebook-logo1.png" />
          </a>
          {/* <a href="https://wa.me/message/CED24IACMYNVB1" target="_blank">
            <Whatsapp src="/assets/twitter.png" />
          </a> */}
        </Logos>
        <Text>&copy;. {currentYear}  Joshua Aninku - A Software Engineer</Text>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 30px;
  box-shadow: 0px 5px 2px #f2f2f2;
`;
const Wrapper = styled.div`
  width: 90%;
  border-top: 3px solid #f2f2f2;
  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  z-index: 5;
`;
const Logos = styled.div`
  margin-bottom: 10px;
`;
const Facebook = styled.img`
  width: 20px;
  margin: 10px;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(1.25);
  }
`;
const Instagram = styled.img`
  width: 20px;
  cursor: pointer;

  margin: 10px;
`;
const Linkedin = styled.img`
  width: 20px;
  cursor: pointer;
  margin: 10px;

  transition: all 350ms;

  :hover {
    transform: scale(1.25);
  }
`;
const Whatsapp = styled.img`
  width: 20px;
  margin: 10px;
  cursor: pointer;

  transition: all 350ms;

  :hover {
    transform: scale(1.25);
  }
`;
const Github = styled.img`
  width: 20px;
  margin: 10px;

  cursor: pointer;

  transition: all 350ms;

  :hover {
    transform: scale(1.25);
  }
`;

const Text = styled.div`
  font-size: 15px;
  color: grey;
  text-align: center;

  transition: all 350ms;

  :hover {
    transform: scale(1.25);
  }
`;
