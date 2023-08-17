import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  width: auto;
  height: auto;

  padding: 32px;
  background: ${({ theme }) => theme.colors.slate[200]};
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.slate[300]};;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    width: 100px;
    margin-bottom: 16px;
  }
`;

export const Role = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;
  background: ${({ theme }) => theme.colors.slate[100]};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.slate[300]};;
  margin-bottom: 4px;
`;
