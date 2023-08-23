import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  width: auto;
  height: auto;

  padding: 32px;
  background: ${({ theme }) => theme.colors.blue.primary};
  border-radius: 4px;
  border: 4px solid ${({ theme }) => theme.colors.blue.secondary};
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
  background: ${({ theme }) => theme.colors.blue.tertiary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue.secondary};;
  margin-bottom: 4px;

  > strong {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
