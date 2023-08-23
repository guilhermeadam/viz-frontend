import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  min-width: 256px;

  padding: 16px;

  background: ${({ theme }) => theme.colors.sidebar.background};
`;

export const User = styled.div`
  display: flex;
  align-items: center;


  .avatar {
    width: 44px;
    height: 44px;

    border-radius: 22px;
    border: 4px solid ${({ theme }) => theme.colors.sidebar.color};
  }

  .profile {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    > strong {
      color: ${({ theme }) => theme.colors.gray};
    }

    > span {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const TitleSession = styled.div`
  margin: 16px 0;

  > span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ItemSession = styled.div`
  display: flex;
  align-items: center;

  padding: 12px;

  background: ${({ theme, isSelected }) => isSelected ? theme.colors.gray : ''};
  border-radius: 4px;

  > svg {
    width: 20px;
    height: 20px;
    color:  ${({ theme, isSelected }) => isSelected ? theme.colors.sidebar.background : theme.colors.gray};
    
  }

  > span {
    margin-left: 12px;
    color: ${({ theme, isSelected }) => isSelected ? theme.colors.sidebar.background : theme.colors.gray};
    font-weight: ${({ isSelected }) => isSelected ? 'bold' : '400'};
  }
`;
