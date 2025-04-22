import { Container, Row, Col } from "react-bootstrap";

export const FooterDown = () => {
   return <section className="footer-down">
      <Container>
         <Row>
            <Col xl={9}>
               <span>ZombieFighters2006©.</span>
               <span> RoflanPominki</span>
            </Col>
            <Col>
               <span>ПРАВИЛА КЛУБУ</span>
            </Col>
         </Row>
      </Container>
   </section>;
}