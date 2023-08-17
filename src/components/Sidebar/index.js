import { useEffect, useState } from 'react';

import { pentaho } from '../../services/api';
import { parseCdf } from '../../utils/parseCdf';

import { Link } from 'react-router-dom';

import {
  Container,
  User,
  TitleSession,
  ItemSession,
} from './styles';

import avatar from '../../assets/images/avatar.svg';
import sidebar from '../../assets/resources/sidebarItems';


export default function Sidebar() {
  const [user, setUser] = useState('');
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponse = parseCdf(response.data);

        setRoles(parsedResponse.roles);
        setUser(parsedResponse.user);
      } catch(error) {
        console.log('$Error: ', error);
      }
    }

    loadUser();
  }, []);

  const isAdmin = roles.includes('Administrator');

  return (
    <Container>

      <Link to='/'>
        <User>
          <img src={avatar} alt="Avatar do colaborador" className="avatar" />
          <div className="profile">
            <strong>{user}</strong>
            {isAdmin ? <span>Administrator</span> : <span>Colaborador</span>}
          </div>
        </User>
      </Link>

      {sidebar.map((items) => {
        const { session, sessionItems, isProtected } = items;

        return (
          <div key={session}>
            {isProtected === (isAdmin ? isProtected : false) && (
              <>
                <TitleSession>
                  <span>{session}</span>
                </TitleSession>

                {sessionItems.map((sessionItem) => {
                  const { name, path, Icon } = sessionItem;

                  return (
                    <Link key={name} to={path} onClick={() => console.log(name)}>
                      <ItemSession>
                        <Icon />
                        <span>{name}</span>
                      </ItemSession>
                    </Link>
                  );
                })}

              </>
            )}
          </div>
        );
      })}

    </Container>
  );
}
