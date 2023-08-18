import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 16px;

  transition: 0.2s ease-in;

  cursor: pointer;

  border-radius: 4px;
  background: linear-gradient(140deg, rgba(0,159,227,1) 35%, rgba(203,214,30,1) 90%);

  > button {
    margin-top: auto;
  }

  > span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.slate[50]};
  }

  &:hover {
    background: linear-gradient(90deg, rgba(0,159,227,1) 45%, rgba(203,214,30,1) 80%);
    border-top-right-radius: 64px;
    border-bottom-left-radius: 64px;
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

> svg {
    height: 20px;
    width: 20px;
    color: #FFF;
  }

  > strong {
    color: #FFF;
    font-size: 20px;
    margin-left: 8px;
  }
`;

