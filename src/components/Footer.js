import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { ArrowRightCircle, ArrowUpCircle } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} sm={3} className="text-center">
            <div className="social-icon mx-0">
            <a href="https://www.linkedin.com/in/lautaro-sorrentino-96a3bb227/" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/xsorren/" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/lautasorren/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}