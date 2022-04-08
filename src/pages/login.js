import Container from '../component/container';
import Message from '../component/message';
import Navbar from '../component/navbar';
import { spotifyAuthorizeURL } from '../service/authorize';

const Login = () => {
  return (
    <>
      <Navbar authorizeUrl={spotifyAuthorizeURL()} />

      <Container>
        <Message
          title="Login to Spotipi"
          description="Please click login for using Spotipi features"
          style={{
            margin: '200px',
          }}
        />
      </Container>
    </>
  );
};

export default Login;
