import React from 'react';
import styled from 'styled-components';

const CategoryTabs = () => {
  return (
    <TabsContainer>
      <Tab>Search All</Tab>
      <Tab>Hotels</Tab>
      <Tab>Things to Do</Tab>
      <Tab>Restaurants</Tab>
      <Tab>Flights</Tab>
      <Tab>Holiday Homes</Tab>
    </TabsContainer>
  );
};

// Styling
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

`;

const Tab = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  font-weight:700;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

export default CategoryTabs;
