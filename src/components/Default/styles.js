import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 220px;
    height: 220px;
  }

  > strong {
    margin-top: 16px;
    font-size: 24px;
  }
`;
