import { useState } from 'react';
import { VictoryBar, VictoryChart  } from 'victory';

import { Container, Header, InputDate, SubHeader } from './styles';

import logoCageceGoverno from '../../assets/images/logocagecegoverno.png';
import pulseDot from '../../assets/images/pulse.gif';

export default function Management() {
  const [dateNow, setDateNow] = useState(new Date().toLocaleDateString() +' '+ new Date().toLocaleTimeString());

  (function updateUsersOnline() {
    setInterval(() => {
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();

      const dateUsers = `${date} ${time}`;
      setDateNow(dateUsers);
    }, 60000);
  })();

  return (
    <Container>
      <Header>
        <div className="title-header">
          <span>Dashboard</span>
          <h1>Gestão SEI</h1>
        </div>
        <img src={logoCageceGoverno} width={434} alt="Logo Cagece Governo" />
      </Header>

      <SubHeader>
        <div className="online">
          <div className="users">
            <img src={pulseDot} width={56} alt="Pulse" />
            <strong>32</strong>
            <span>usúarios online</span>
          </div>
          <div className="updated">
            <span>Atualizado: {dateNow}</span>
          </div>
        </div>
        <div>
          <InputDate type="date" required />
        </div>
      </SubHeader>
      <div style={{ width: '500px' }}>
        <VictoryChart animate={{ duration: 2000, easing: 'bounce' }}>
          <VictoryBar 
            data={[
              {x: 1, y: 2},
              {x: 2, y: 4},
              {x: 3, y: 7},
              {x: 4, y: 3},
              {x: 5, y: 5},
            ]}
          />
        </VictoryChart>
      </div>
    </Container>
  );
}