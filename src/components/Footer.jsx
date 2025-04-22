import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.PNG";
import { FooterCol } from "./FooterCol";
import { ClubsInfo as clubs } from "../ClubsInfo";

export const Footer = () => {

   const groupedClubs = {
      Київ: [],
      Львів: [],
      Козятин: [],
      Баранівка: [],
    };
    
    clubs.forEach((club) => {
      if (groupedClubs[club.city]) {
        groupedClubs[club.city].push(club);
      }
    });
   
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
            {Object.entries(groupedClubs).map(([city, clubList], index) => (
               <Col key={index} md={3}>
                  <h4>{city}</h4>
                  {clubList.map((club) => (
                  <FooterCol
                     key={club.id}
                     name={club.name}
                     address={club.address}
                     city={club.city}
                  />
                  ))}
               </Col>
            ))}
         </Row>
      </Container>
   </section>; 
}