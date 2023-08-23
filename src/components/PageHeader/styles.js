import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 56px;
  width: 100%;

  > svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.cagece.colorHeaderPage}
  }

  > strong {
    font-size: 28px;
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.cagece.colorHeaderPage}
  }
`;
