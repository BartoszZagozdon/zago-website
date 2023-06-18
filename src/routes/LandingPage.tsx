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
  height: 60vh;
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
    setMsg('Hi! My name is Zago ;)');
  }, []);

  return (
    <AboutMeSectionContainer>
      <PhotoStyled src={MyPhoto} />
      <Article>
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi atque corporis modi necessitatibus itaque,
        reiciendis numquam delectus? Veritatis quod eveniet culpa odio voluptatibus asperiores, laborum officia voluptas
        sed enim aspernatur, inventore eos quam facilis quos, quas natus. Quibusdam, consequatur neque dignissimos,
        ipsam excepturi doloribus amet dolor voluptas tenetur impedit quas pariatur autem atque cum eos odit quisquam
        temporibus est suscipit cupiditate asperiores reiciendis error officiis? Eveniet fugiat commodi aperiam, enim,
        ut minima ab temporibus nisi ipsum labore unde voluptatibus voluptatum nam incidunt quia et nulla corporis earum
        quis consequuntur odio totam. Non corporis molestias aspernatur qui officiis voluptates deleniti natus! */}
        Hello there! My real name is Bartosz Zagozdon but I go by Zago when it comes to music production. I'm trying to
        get my first job as a Front-end Developer, since it always was a dream of mine and you can find my (I hope) cool
        projects in the 'Programming' section. I also really enjoy making electronic music as a hobby and I welcome you
        to check out my music in the 'Music' section where you can also leave me some feedback which is much
        appreciated!
        <ThankU>Thank You For Your Time!</ThankU>
      </Article>
    </AboutMeSectionContainer>
  );
};

export default LandingPage;
