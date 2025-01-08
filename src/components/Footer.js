import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.headerBg};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://linkedin.com/in/mauriciobedun">LinkedIn</SocialLink>
        <SocialLink href="https://github.com/mauriciobedun">GitHub</SocialLink>
        <SocialLink href="https://kaggle.com/mauriciobedun">Kaggle</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
