import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  height: 500px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;
`;

export const ProcessImage = styled.img`
  width: 350px;
  height: 350px;
`;

export const ProcessDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: #FFF
  }
`;

export const ProcessTitle = styled.div`
    margin-bottom: 48px;
`;