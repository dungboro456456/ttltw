import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer  style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <p>Group members:</p>
            <ul>
              <li>Nguyễn Thái Vũ</li>
              <li>Thái Hữu Vinh</li>
              <li>Nguyễn Tấn Dũng</li>
              <li>Nguyễn Thành Văn</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
