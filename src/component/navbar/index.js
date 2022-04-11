import Container from '../container';
import ButtonAuth from './btn-auth';
import styles from './navbar.module.scss';

const Navbar = ({ children, authorizeUrl }) => {
  return (
    <header className={styles.navbar}>
      <Container>
        <nav>
          <div>{children}</div>
          <ButtonAuth authorizeUrl={authorizeUrl} />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
