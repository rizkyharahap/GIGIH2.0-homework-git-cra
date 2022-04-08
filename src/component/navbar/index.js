import Container from '../container';
import ButtonAuth from './btn-auth';
import './index.css';

const Navbar = ({ children, authorizeUrl }) => {
  return (
    <header className="navbar-wrapper">
      <Container>
        <nav className="navbar">
          <div>{children}</div>
          <ButtonAuth authorizeUrl={authorizeUrl} />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
