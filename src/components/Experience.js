import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  margin: 1rem 0;
`;

const JobEntry = styled.div`
  margin-bottom: 2rem;
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const JobPeriod = styled.p`
  color: ${({ theme }) => theme.text}aa;
  font-style: italic;
  margin-bottom: 1rem;
`;

const JobDescription = styled.ul`
  list-style-type: none;
  padding-left: 1.5rem;
`;

const JobItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  &:before {
    content: "•";
    position: absolute;
    left: -1.5rem;
    color: ${({ theme }) => theme.headerBg};
  }
`;

const TechStack = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.text}dd;
  font-size: 0.9rem;
  font-style: italic;
`;

const StackLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

function Experience() {
  return (
    <ExperienceSection>
      <h2>Experiência</h2>
      <JobEntry>
        <JobTitle>Engenheiro de dados • EVIG</JobTitle>
        <JobPeriod>fevereiro de 2024 - dezembro de 2024</JobPeriod>
        <JobDescription>
          <JobItem>Desenvolvi uma API completa usando Python e FastAPI, integrando chatbot com OpenAI a um sistema de conversação inteligente que fornece respostas personalizadas baseadas no contexto do usuário.</JobItem>
          <JobItem>Criei agents especializados utilizando LangChain para análise financeira automatizada, que processam dados do usuário e geram insights estratégicos sobre investimentos e gestão financeira, otimizando o processo de tomada de decisão.</JobItem>
          <JobItem>Implementei soluções de geolocalização para o setor imobiliário utilizando a API do Nominatim.</JobItem>
          <JobItem>Realizei deploy de aplicações em ambiente cloud usando Docker e Google Cloud Platform (GCP).</JobItem>
        </JobDescription>
          <TechStack>
            <StackLabel>Stacks utilizadas:</StackLabel> Python, FastAPI, Docker, Cloud Run (GCP), OpenAI API, Nominatim API, PostgreSQL, LangChain.
          </TechStack>
        </JobEntry>
      {/* Add other job experiences */}
      <JobEntry>
        <JobTitle>Analista de dados • Saúde da Gente</JobTitle>
        <JobPeriod>julho de 2023 - setembro de 2023</JobPeriod>
        <JobDescription>
          <JobItem>Desenvolvi projeto de integração entre CRM (Pipedrive) e Microsoft SQL Server, com atualizações automáticas via GitHub Actions a cada 5-10 minutos.</JobItem>
          <JobItem>Modelei banco de dados otimizado para API do Pipedrive, garantindo estrutura robusta para análises avançadas.</JobItem>
          <JobItem>Criei dashboard dinâmico no Power BI integrando KPIs de vendas, funis e análises de produtos, com atualização automática dos dados.</JobItem>
        </JobDescription>
        <TechStack>
          <StackLabel>Stacks utilizadas:</StackLabel> SQL Server, Pipedrive API, Power BI, GitHub Actions, Python
        </TechStack>
      </JobEntry>

      {/* Add other job experiences */}
      <JobEntry>
        <JobTitle>Analista de dados • New Bloomers</JobTitle>
        <JobPeriod>julho de 2022 - fevereiro de 2023</JobPeriod>
        <JobDescription>
          <JobItem>Gerenciei banco de dados ERP, criando tabelas, procedures e realizando validação de dados para garantir integridade.</JobItem>
          <JobItem>Desenvolvi tabela estratégica de vendas com atualização automática a cada 3 minutos, integrando dados de pedidos, clientes e produtos.</JobItem>
          <JobItem>Implementei sistema de merge para atualização eficiente de dados, otimizando performance e fornecendo insights para diferentes departamentos.</JobItem>
        </JobDescription>
        <TechStack>
          <StackLabel>Stacks utilizadas:</StackLabel> SQL Server, Procedures, ERP, Data Modeling
        </TechStack>
      </JobEntry>
    
    {/* Add other job experiences */}
      <JobEntry>
        <JobTitle>Analista de risco de crédito • Via Varejo SA</JobTitle>
        <JobPeriod>janeiro de 2020 - março de 2020</JobPeriod>
        <JobDescription>
          <JobItem>Implementei melhorias e novas regras no motor de crédito utilizando Java e SAS.</JobItem>
          <JobItem>Desenvolvi queries SQL para validação de regras e correções no motor de crédito.</JobItem>
          <JobItem>Realizei análises de dados para validação de implementações usando Excel.</JobItem>
        </JobDescription>
        <TechStack>
          <StackLabel>Stacks utilizadas:</StackLabel> Java, SAS, SQL, Excel
        </TechStack>
      </JobEntry>

    </ExperienceSection>
  );
}

export default Experience;



