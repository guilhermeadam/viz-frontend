import {
  FiCoffee,
  FiBell,
  FiBox,
  FiBarChart2,
  FiTablet,
  FiSun,
  FiCheckCircle,
  FiShield,
  FiAward,
  FiTruck,
  FiRepeat,
  FiFolderPlus
} from 'react-icons/fi';

const sidebar = [
  {
    session: 'Principal',
    isProtected: false,
    sessionItems: [
      {
        name: 'SEI',
        path: '/',
        Icon: FiCoffee,
        dev: false,
      },
      {
        name: 'Notificação',
        path: '/notification',
        Icon: FiBell,
        dev: false,
      },
      {
        name: 'Analyzer',
        path: '/analyzer',
        Icon: FiBox,
        dev: false,
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        Icon: FiBarChart2,
        dev: true,
      },
      {
        name: 'Analítico',
        path: '/analytics',
        Icon: FiTablet,
        dev: true,
      },
      {
        name: 'Documentação',
        path: '/documentation',
        Icon: FiSun,
        dev: true,
      },
    ],
  },
  {
    session: 'Processo',
    isProtected: false,
    sessionItems: [
      {
        name: 'Validação',
        path: '/validation',
        Icon: FiCheckCircle,
        dev: true,
      },
      {
        name: 'Liberação',
        path: '/liberation',
        Icon: FiShield,
        dev: true,
      }
    ],
  },
  {
    session: 'Administrador',
    isProtected: true,
    sessionItems: [
      {
        name: 'Gestão',
        path: '/management',
        Icon: FiAward,
        dev: true,
      },
      {
        name: 'Cargas',
        path: '/load',
        Icon: FiTruck,
        dev: true,
      },
      {
        name: 'Reprocessamento',
        path: '/reprocess',
        Icon: FiRepeat,
        dev: true,
      },
      {
        name: 'Cadastro',
        path: '/register',
        Icon: FiFolderPlus,
        dev: true,
      }
    ],
  }
];

export default sidebar;
