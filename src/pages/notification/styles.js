import styled from 'styled-components';

export const NotificationCard = styled.div`
  width: 100%;
  background: ${({ theme, type }) => type === 'success' ? theme.colors.notification.success
    : type === 'warning' ? theme.colors.notification.warning
      : type === 'error' ? theme.colors.notification.error : theme.colors.notification.info};

  border-radius: 4px;

  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;

  svg {
    width: 44px;
    height: 44px;
    color: ${({ theme }) => theme.colors.gray};
  }

  .body {
    display: flex;
    flex-direction: column;

    margin-left: 12px;

    strong {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.gray};
    }

    span {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.gray};
    }

    span + span {
      margin-top: 20px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray};

      line-height: 1.5em
    }

  }
`;
