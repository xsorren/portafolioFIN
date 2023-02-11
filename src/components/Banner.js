import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import alien from "../assets/img/alien.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <h1>{`Hola! Soy Lautaro`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Soy desarrollador web, apasionado por la tecnología y la programación. Con tres años de experiencia, trabajando bajo distintas metodologias. Enfocandome siempre en mejorar mi desempeño, aprender de cada error, para superarme tanto profesional como personalmente.</p>
                  <a href="#connect">Contactar Ahora <ArrowRightCircle size={25} /></a>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            <div className="alien">
                <div className="animate__animated animate__zoomIn">
                  <img src={alien} alt="Header Img"/>
                </div>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}