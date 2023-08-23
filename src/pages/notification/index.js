import { useEffect, useState } from 'react';
import { api, pentaho } from '../../services/api';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import { NotificationCard } from './styles';
import { FiBell, FiCheckCircle ,FiAlertCircle, FiAlertOctagon, FiAlertTriangle } from 'react-icons/fi';

import { parseNotification } from '../../utils/parseNotification';
import { parseCdf } from '../../utils/parseCdf';

export default function Notification() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      try {
        setIsLoading(true);

        const response = await api.get('getaviso');
        const parsedNotification = response.data.resultset.map(notification => parseNotification(notification));

        const responsePentaho = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponsePentaho = await parseCdf(responsePentaho.data);

        setNotifications(parsedNotification);
        setUserRoles(parsedResponsePentaho.roles);

      }
      catch(error) {
        console.log('$Error: ', error);
      }
      finally {
        setIsLoading(false);
      }
    }

    loadNotifications();
  }, []);

  const notificationsFilteredUserRoles = notifications.filter(notification => notification.roles.split(', ').some(r => userRoles.includes(r)));

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader title='Notificações' icon={<FiBell />} />
      {notificationsFilteredUserRoles.length === 0 && <strong>Não existem notificações disponíveis para você.</strong>}
      {notificationsFilteredUserRoles.map((notification) => (
        <NotificationCard type={notification.type} key={notification.id}>
          {notification.type === 'info' && <FiAlertCircle />}
          {notification.type === 'success' && <FiCheckCircle />}
          {notification.type === 'warning' && <FiAlertOctagon />}
          {notification.type === 'error' && <FiAlertTriangle />}
          <div className="body">
            <strong>{notification.title}</strong>
            <span>{notification.description}</span>
            <span>Expira em: {new Date(notification.expiration).toLocaleDateString()} </span>
          </div>
        </NotificationCard>
      ))}
    </Container>
  );
}
