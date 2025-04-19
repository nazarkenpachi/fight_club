import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import backgroundVideo from '../assets/background_banner.MP4';

export const Banner = () => {
   return <section className="banner" id="home">
      <Container>
         <Row className="align-items-center">
            <video autoPlay loop muted playsInline className="background-video">
               <source src={backgroundVideo} type="video/mp4" />
            </video>
            <Col xs={12} md={6} xl={7}>
               <h1>{'Ласкаво просимо в '}<span className="wrap">бійцівський клуб!</span></h1>
               <p>Не важливо хто ти поза підвалом - головне хто ти в підвалі</p>
               <button onClick={() => console.log('connect')}>Слідувати <ArrowRightCircle size = {25}/> </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
               {/* <img src={photo} alt="photo" className="bannerImg"/> */}
            </Col>
         </Row>
      </Container>
   </section>;
}