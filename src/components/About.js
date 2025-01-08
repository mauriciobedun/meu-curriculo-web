import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  margin: 1rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const Introduction = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const HighlightsList = styled.ul`
  list-style-type: none;
  padding-left: 1.5rem;
`;

const HighlightItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  color: ${({ theme }) => theme.text};
  
  &:before {
    content: "•";
    position: absolute;
    left: -1.5rem;
    color: ${({ theme }) => theme.headerBg};
  }
`;

const HighlightTitle = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

function About() {
  return (
    <AboutSection id="sobre">
      <Title>Resumo</Title>
      <Introduction>
        Olá! Sou um engenheiro eletrônico movido pela curiosidade e pelo desejo constante de aprendizado. 
        Ao longo da minha jornada acadêmica, mergulhei nos desafios da engenharia eletrônica, e foi durante 
        meu TCC que meu fascínio por Machine Learning foi despertado.
      </Introduction>
      <HighlightsList>
        <HighlightItem>
          <HighlightTitle>Explorando o Poder da Inteligência Artificial:</HighlightTitle>
          Meu TCC, "Classifying Alzheimer Disease with Convolutional Neural Networks from MRI", 
          disponível no GitHub.
        </HighlightItem>
        <HighlightItem>
          <HighlightTitle>Evolução na Pandemia:</HighlightTitle>
          Ampliei meus conhecimentos em Ciência de Dados, modelagem de dados e Machine Learning.
        </HighlightItem>
        <HighlightItem>
          <HighlightTitle>Nova Jornada em Ciência da Computação:</HighlightTitle>
          Iniciei um bacharelado em Ciência da Computação em 2023.
        </HighlightItem>
        <HighlightItem>
          <HighlightTitle>Habilidades Atuais:</HighlightTitle>
          Python, SQL, Power BI, Pentaho, Excel, Git, Machine Learning, Análise de Dados.
        </HighlightItem>
        <HighlightItem>
          <HighlightTitle>Rumo ao Futuro:</HighlightTitle>
          Busco me especializar em desenvolvimento de software Backend e Machine Learning avançado.
        </HighlightItem>
      </HighlightsList>
    </AboutSection>
  );
}

export default About;

