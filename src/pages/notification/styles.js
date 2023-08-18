import styled from 'styled-components';

export const NotificationCard = styled.div`
  width: 100%;
  background: ${({ theme, type }) => type === 'success' ? theme.colors.green[300]
    : type === 'warning' ? theme.colors.yellow[300]
      : type === 'error' ? theme.colors.red[300] : theme.colors.blue[300]};

  border-radius: 4px;

  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;

  svg {
    width: 52px;
    height: 52px;
    color: ${({ theme, type }) => type === 'success' ? theme.colors.green[700]
    : type === 'warning' ? theme.colors.yellow[700]
      : type === 'error' ? theme.colors.red[700] : theme.colors.blue[700]};
  }

  .body {
    display: flex;
    flex-direction: column;

    margin-left: 12px;

    strong {
      font-size: 24px;
      color: ${({ theme, type }) => type === 'success' ? theme.colors.green[700]
    : type === 'warning' ? theme.colors.yellow[700]
      : type === 'error' ? theme.colors.red[700] : theme.colors.blue[700]};
    }

    span {
      font-size: 20px;
      color: ${({ theme, type }) => type === 'success' ? theme.colors.green[700]
    : type === 'warning' ? theme.colors.yellow[700]
      : type === 'error' ? theme.colors.red[700] : theme.colors.blue[700]};
    }

    span + span {
      margin-top: 20px;
      font-size: 16px;
      color: ${({ theme, type }) => type === 'success' ? theme.colors.green[700]
    : type === 'warning' ? theme.colors.yellow[700]
      : type === 'error' ? theme.colors.red[700] : theme.colors.blue[700]};
    }

  }
`;
