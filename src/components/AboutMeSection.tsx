import styled, { keyframes } from 'styled-components';

import MyPhoto from '../assets/my_photo.jfif';

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

const GradientBorderAnimation = keyframes`
  0% {
    border-image-source: linear-gradient(to left, #743a11, #d53a9a);
  }
  50% {
    border-image-source: linear-gradient(to left, #7ffa23, #d53aaa);
  }
  100% {
    linear-gradient(to left, #743ad5, #d53a9d);
  }
`;

const Article = styled.article`
  width: 80%;
  min-height: 400px;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  animation: ${GradientBorderAnimation} 3s linear infinite;
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

const AboutMeSection = () => {
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
        Hi there! My real name is Bartosz Zagozdon but I go by Zago when it comes to music production. I'm trying to get
        my first job as a Front-end Developer, since it always was a dream of mine and you can find my (i hope) cool
        projects in the 'Programming' section. I also really enjoy making electronic music as a hobby and I welcome you
        to check out my music in the 'Music' section where you can also leave me some feedback which is much
        appreciated!
        <ThankU>Thank You For Your Time!</ThankU>
      </Article>
    </AboutMeSectionContainer>
  );
};

export default AboutMeSection;
