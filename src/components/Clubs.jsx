import { useState } from "react";
import {Container, Button, Row, Col, Card } from "react-bootstrap";
import { ClubCard } from "./ClubCard";
import { ClubsInfo as clubs } from "../ClubsInfo";

export const Clubs = () => {
   
   const [filter, setFilter] = useState("Усі");

   const filteredClubs = filter === "Усі" ? clubs : clubs.filter(club => club.city === filter);

   const [activeButton, setActiveButton] = useState("Усі");

   const onUpdateActiveLink = (value) => {
      setActiveButton(value);
   }
   
   return <section className="Clubs" id="Clubs">
            <Container>
               <div className="mb-4 ">
                  <Button variant="outline-light" size="lg" onClick={() => {setFilter('Усі'); onUpdateActiveLink('Усі')}} className={activeButton === 'Усі' ? 'mx-2 active' : 'mx-2'}>
                     Усі клуби
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => {setFilter('Київ'); onUpdateActiveLink('Київ')}} className={activeButton === 'Київ' ? 'mx-2 active' : 'mx-2'}>
                     Київ
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => {setFilter('Львів'); onUpdateActiveLink('Львів')}} className={activeButton === 'Львів' ? 'mx-2 active' : 'mx-2'}>
                     Львів
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() =>{setFilter('Козятин'); onUpdateActiveLink('Козятин')}} className={activeButton === 'Козятин' ? 'mx-2 active' : 'mx-2'}>
                     Козятин
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => {setFilter('Баранівка'); onUpdateActiveLink('Баранівка')}} className={activeButton === 'Баранівка' ? 'mx-2 active' : 'mx-2'}>
                     Баранівка
                  </Button>
               </div>
               <Row>
                  {filteredClubs.map(club => (
                     <Col key={club.id} md={4} className="mb-4">
                        <ClubCard
                        imgUrl={club.clubPhoto}
                        name={club.name}
                        city={club.city}
                        address={club.address}
                        time={club.time}
                        />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>;
};