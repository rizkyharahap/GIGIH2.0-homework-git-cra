import Container from '../component/container';
import Message from '../component/message';

const PageNotFound = () => {
  return (
    <Container>
      <Message
        title="404"
        description="Page not found !"
        style={{
          margin: '200px',
        }}
      />
    </Container>
  );
};

export default PageNotFound;
