import styled, { keyframes } from 'styled-components';

const GradientBorderAnimation = keyframes`
  0% {
    border-image-source: linear-gradient(to left, #743a11, #d53a9a);
  }
  50% {
    border-image-source: linear-gradient(to right, #89be24, #d676a9);
  }
  75% {
    border-image-source: linear-gradient(to left, #9bf234, #d88da9);
  }
  100% {
    border-image-source: linear-gradient(to left, #743a11, #d53a9d);
  }
`;

const BorderRules = styled.div`
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743a11, #d53a9d);
  animation: ${GradientBorderAnimation} 3s linear infinite;
`;

export default BorderRules;

/*

blue napisy - #0de1cd
blue player - #2A2F90

main green - #58bf16

violet - violet


*/
