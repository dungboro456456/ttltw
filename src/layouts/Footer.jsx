import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer  style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <p>Group members:</p>
            <ul>
              <li>Member 1</li>
              <li>Member 2</li>
              <li>Member 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
