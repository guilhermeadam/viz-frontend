import { Header } from './styles';

export default function PageHeader({
  icon,
  title
}) {
  return (
    <Header>
      {icon}
      <strong>{title}</strong>
    </Header>
  );
}
