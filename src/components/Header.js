import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.jpg';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.headerGradient};
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  border-radius: 8px;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderContent = styled.div`
  color: white;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  margin: 0 0 1rem 0;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;


function Header() {
  return (
    <HeaderContainer>
      <ProfileImage>
        <img src={profileImage} alt="Mauricio Bedun" />
      </ProfileImage>
      <HeaderContent>
        <Name>Mauricio Bedun</Name>
        <Title>Data Scientist | Data Analyst | Data Engineer</Title>
        <Description>
          Olá! Sou um engenheiro eletrônico movido pela curiosidade e pelo desejo constante de aprendizado. 
          Ao longo da minha jornada acadêmica, mergulhei nos desafios da engenharia eletrônica, e foi durante 
          meu TCC que meu fascínio por Machine Learning foi despertado.
        </Description>
        <ContactInfo>
          <ContactItem>📍 São Paulo, SP</ContactItem>
          <ContactLink href="mailto:mauriciobedun@hotmail.com">
            ✉️ mauriciobedun@hotmail.com
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/mauriciobedun" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/mauriciobedun" target="_blank" rel="noopener noreferrer">
            💻 GitHub
          </ContactLink>
          <ContactLink href="https://www.kaggle.com/mauriciobedun" target="_blank" rel="noopener noreferrer">
            📊 Kaggle
          </ContactLink>
          <ContactItem>📱 11989731384</ContactItem>
        </ContactInfo>
      </HeaderContent>
    </HeaderContainer>
  );
}


export default Header;





