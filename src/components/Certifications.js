import React from 'react';
import styled from 'styled-components';

const CertificationsSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  margin: 1rem 0;
`;

const CertificationsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const CertificationItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  &:before {
    content: "🏆";
    position: absolute;
    left: 0;
  }
`;

function Certifications() {
  return (
    <CertificationsSection>
      <h2>Certifications</h2>
      <CertificationsList>
        <CertificationItem>Microsoft Certified: Azure AI Fundamentals</CertificationItem>
        <CertificationItem>SQL Server: Advanced Queries with Microsoft SQL Server 2017</CertificationItem>
        <CertificationItem>Introduction to Cybersecurity</CertificationItem>
      </CertificationsList>
    </CertificationsSection>
  );
}

export default Certifications;
