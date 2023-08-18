import styled from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.slate[200]};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
`;
