import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.PNG";
import { FooterCol } from "./FooterCol";

export const Footer = () => {
   const items = [
      {
         id: "0",
         title: "Про нас",
         list: ['Amogus']
      },
      {
         id: "1",
         title: "Гостям",
         list: ['Amogus', 'Amogus', 'Amogus', 'Amogus', 'Amogus', 'Amogus', 'Amogus']
      },
      {
         id: "2",
         title: "Спеціалістам",
         list: ['Amogus', 'Amogus', 'Amogus', 'Amogus', 'Amogus']
      },
      {
         id: "3",
         title: "Партнерам",
         list: ['Amogus', 'Amogus', 'Amogus', 'Amogus']
      },
   ]
   return <section className="footer" id="footer">
      <Container>
      <Row className="justify-content-between align-items-center">
         <Col>
            <img src={logo} alt="логотип" />
         </Col>
         <Col className="d-flex justify-content-end">
            <Button variant="outline-light">Зв'язатись з нами</Button>
         </Col>
      </Row>
         <Row>
            {items.map(item => (
               <Col id={item.id} md={3}>
                  <FooterCol 
                  title={item.title}
                  items={item.list}
                  />
               </Col>
            ))}
         </Row>
      </Container>
   </section>; 
}