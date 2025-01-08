import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  margin: 1rem 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.headerBg};
  }
`;

function Skills() {
  return (
    <SkillsSection>
      <h2>Habilidades Atuais</h2>
      <SkillsGrid>

          <SkillsList>
            <SkillItem>Python</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>Machine Learning</SkillItem>
            <SkillItem>FastAPI</SkillItem>
            <SkillItem>Docker</SkillItem>
            {/* Add more hard skills */}
          </SkillsList>

          <SkillsList>
            <SkillItem>GCP</SkillItem>
            <SkillItem>PostgreSQL</SkillItem>
            <SkillItem>LangChain</SkillItem>
            <SkillItem>Data Modeling</SkillItem>
            <SkillItem>Excel</SkillItem>
            {/* Add more soft skills */}
          </SkillsList>

      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;


