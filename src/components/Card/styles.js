import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 16px;

  transition: 0.2s ease-in;
  border: 1px solid #ccc;
  cursor: pointer;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.cagece.backgroundCard};

  > button {
    margin-top: auto;
  }

  > span {
    margin-top: 4px;
    color: #2b2b2b;
  }

  &:hover {
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

