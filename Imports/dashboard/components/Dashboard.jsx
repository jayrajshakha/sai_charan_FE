"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 0.5rem; /* 2 */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem; /* py-4 px-6 */
  background-color: white;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
`;

const Title = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #2d3748; /* text-gray-800 */
`;

const Main = styled.main`
  margin-top: 1.5rem; /* mt-6 */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem; /* gap-6 */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
`;

const Section = styled.section`
  padding: 1rem; /* p-4 */
  background-color: white;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* hover:scale-110 */
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  color: #2d3748; /* text-gray-800 */
`;

const SectionText = styled.p`
  margin-top: 0.5rem; /* mt-2 */
  color: #4a5568; /* text-gray-600 */
`;

const Dashsboard = () => {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      <Main>
        <Section onClick={() => router.push("/admin/list")}>
          <SectionTitle>Bills Data</SectionTitle>
          <SectionText>Some Bills Data content...</SectionText>
        </Section>

        <Section onClick={() => router.push("/admin/form")}>
          <SectionTitle>Form</SectionTitle>
          <SectionText>Some Form content...</SectionText>
        </Section>

        <Section>
          <SectionTitle>Records</SectionTitle>
          <SectionText>Some Records content...</SectionText>
        </Section>

        <Section>
          <SectionTitle>User Activity</SectionTitle>
          <SectionText>Some user activity content...</SectionText>
        </Section>

        <Section>
          <SectionTitle>Settings</SectionTitle>
          <SectionText>Some settings content...</SectionText>
        </Section>
      </Main>
    </Container>
  );
};

export default React.memo(Dashsboard);
