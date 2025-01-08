import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  margin: 1rem 0;
`;

const EducationEntry = styled.div`
  margin-bottom: 1.5rem;
`;

const School = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const Degree = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.25rem;
`;

const Period = styled.p`
  color: ${({ theme }) => theme.text}aa;
  font-style: italic;
`;

function Education() {
  return (
    <EducationSection>
      <h2>Formação acadêmica</h2>
      <EducationEntry>
        <School>Universidade São Judas Tadeu</School>
        <Degree>Bacharelado, Ciência da Computação</Degree>
        <Period>2023 - 2026</Period>
      </EducationEntry>

      {/* Add other education entries */}
      <EducationEntry>
        <School>Universidade São Judas Tadeu</School>
        <Degree>Engenharia eletrônica</Degree>
        <Period>2015 - 2022</Period>
      </EducationEntry>

    </EducationSection>
  );
}

export default Education;


