import styled from 'styled-components';

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 16px 0;

  svg {
    height: 20px;
    width: 20px;
    color: #2b2b2b;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: ${({ lengthResource }) => lengthResource === 1 ? '1fr' : '1fr 1fr'};
  grid-template-rows: max-content;
  gap: 16px;
  overflow-y: auto;

  padding: 0 12px;
`;
