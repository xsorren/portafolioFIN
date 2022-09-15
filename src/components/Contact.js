import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail','hola',form.current,'2qnl275lOMpBYelkp')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
                <img src={contactImg} alt="Contact Us"/>
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              
                <div>
                <h2>Contactame</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Nombre" name="name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Apellido" name="lastName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email" name="email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Telefono" name="phone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Mensaje" name="message" ></textarea>
                      <button type="submit"><span>ENVIAR</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}