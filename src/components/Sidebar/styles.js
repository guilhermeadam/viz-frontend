import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  min-width: 256px;

  padding: 16px;

  background: linear-gradient(140deg, rgba(0,159,227,1) 35%, rgba(203,214,30,1) 90%);
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    width: 44px;
    height: 44px;

    border-radius: 22px;
    border: 4px solid #FFF;
  }

  .profile {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
`;

export const TitleSession = styled.div`
  margin: 16px 0;
`;

export const ItemSession = styled.div`
  display: flex;
  align-items: center;

  padding: 12px;

  > svg {
    width: 20px;
    height: 20px;
  }

  > span {
    margin-left: 12px;
  }


`;
