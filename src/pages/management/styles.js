import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 144px;
  background: #253E92;

  padding: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title-header {
    color: #FFF;

    > span {
      font-size: 32px;
    }

    > h1 {
      font-size: 56px;
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 18px;

  .online {
    display: flex;
    align-items: center;
    flex-direction: column;

    .users {
      display: flex;
      align-items: center;
   

    > strong {
      font-size: 24px;
      margin-left: -4px;
    }

    > span {
      margin-left: 8px;
    }

  }
    .updated {
      display: flex;
      margin-left: auto;

      > span {
        color: #898989;
        font-size: 12px;

      }
    }
  }
`;

export const InputDate = styled.input`
    background-color: #0080ff;
    padding: 12px;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 5px;
`;