import styled from 'styled-components';

import BorderRules from '../utils/borderAnimation';

import MyPhoto from '../assets/my_photo.jfif';
import { useContext, useEffect } from 'react';
import { WelcomeMsgContext } from '../context/WelcomeMsgProvider';

const AboutMeSectionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0px solid lime;
  margin-top: 30px;
  position: relative;
`;

const PhotoStyled = styled.img`
  width: 200px;
  heigh: 200px;
  border-radius: 50%;
`;

const Article = styled(BorderRules)`
  width: 80%;
  min-height: 60vh;
  font-size: 1.4rem;
  position: absolute;
  top: 50%;
  padding-top: 110px;
  padding-inline: 50px;
  z-index: -1;
  text-align: center;
  line-height: 30px;
`;

const ThankU = styled.h2`
  color: #0de1cd;
  margin-top: 40px;
`;

const LandingPage = () => {
  const { setMsg } = useContext(WelcomeMsgContext);

  useEffect(() => {
    setMsg("Hi! I'm Bartek ;)");
  }, []);

  return (
    <AboutMeSectionContainer>
      <PhotoStyled src={MyPhoto} />
      <Article>
        Hello there! My real name is Bartosz Zagozdon, but I go by Zago when it comes to music production. I'm currently
        pursuing my dream of becoming a Front-end Developer, and you can find some of my (hopefully) cool projects in
        the 'Programming' section. Apart from coding, I have a great passion for making electronic music as a hobby. I
        invite you to check out my music in the 'Music' section, where you can also leave me some feedback. Any feedback
        would be greatly appreciated!
        <ThankU>Thank You For Your Time!</ThankU>
      </Article>
    </AboutMeSectionContainer>
  );
};

export default LandingPage;
