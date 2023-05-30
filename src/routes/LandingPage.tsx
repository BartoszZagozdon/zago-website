//import styled from "styled-components";

import HeaderComponent from '../components/Header';
import AboutMeSection from '../components/AboutMeSection';

const LandingPage = () => {
  return (
    <>
      <HeaderComponent location={'Hello! My name is Zago ;)'}></HeaderComponent>
      <AboutMeSection />
    </>
  );
};

export default LandingPage;
