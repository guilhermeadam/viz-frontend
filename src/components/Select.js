import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: none;
  background: #FCFCFC 0% 0% no-repeat padding-box;
  border: 1px solid #C9C9C9;
  height: 52px;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  opacity: 1;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue.primary};
  }

`;
