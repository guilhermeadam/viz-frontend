import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 16px;

  transition: 0.2s ease-in;
  border: 1px solid #F8F8F8;
  cursor: pointer;

  border-radius: 4px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #2B2B2B40;
  opacity: 1;

  position: relative;
  transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);

  > button {
    margin-top: auto;
  }


  > span {
    margin-top: 4px;
    color: #2b2b2b;
  }

  &:hover {
    transform: scale(1.020);
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

> svg {
    height: 20px;
    width: 20px;
    color: #2b2b2b;
  }

  > strong {
    color: #2b2b2b;
    font-size: 20px;
    margin-left: 8px;
  }
`;

export const Marker = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.blue.primary} 0% 0% no-repeat padding-box;
  opacity: 1;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

