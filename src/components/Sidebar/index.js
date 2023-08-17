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

  const isAdmin = true;

  return (
    <Container>

      <User>
        <img src={avatar} alt="Avatar do colaborador" className="avatar" />
        <div className="profile">
          <strong>215433</strong>
          <span>GETIC-SIS</span>
        </div>
      </User>

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
