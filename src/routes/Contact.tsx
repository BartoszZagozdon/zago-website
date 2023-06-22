import styled from 'styled-components';

import BorderRules from '../utils/borderAnimation';

import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import { WelcomeMsgContext } from '../context/WelcomeMsgProvider';

const ContactContainer = styled(BorderRules)`
  width: 73%;
  min-height: 70vh;
  font-size: 1.2rem;
  // border: 1px solid lime;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const AllInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const EmailIcon = styled(AiOutlineMail)`
  width: 100px;
  height: 100px;
`;

const LinIcon = styled(FaLinkedin)`
  width: 100px;
  height: 100px;
`;

const GitIcon = styled(FaGithub)`
  width: 100px;
  height: 100px;
`;

const ContactInfo = styled.a``;

const Contact = () => {
  const { setMsg } = useContext(WelcomeMsgContext);

  useEffect(() => {
    setMsg('Contact Me!');
  }, []);

  return (
    <ContactContainer>
      <AllInfoContainer>
        <InfoContainer>
          <EmailIcon />
          <span>bart.zagozdon@gmail.com</span>
        </InfoContainer>
        <InfoContainer>
          <LinIcon />
          <ContactInfo href="https://www.linkedin.com/in/bartosz-zagozdon/">in/bartosz-zagozdon/</ContactInfo>
        </InfoContainer>
        <InfoContainer>
          <GitIcon />
          <ContactInfo href="https://github.com/BartoszZagozdon">/BartoszZagozdon</ContactInfo>
        </InfoContainer>
      </AllInfoContainer>
    </ContactContainer>
  );
};

export default Contact;
