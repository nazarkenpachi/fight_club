import { useState } from "react";
import {Container, Button, Row, Col, Card } from "react-bootstrap";
import { ClubCard } from "./ClubCard";
import gym1 from '../assets/gym_photo1.jpg';
import gym2 from '../assets/gym_photo2.jpg';
import gym3 from '../assets/gym_photo3.jpg';
import gym4 from '../assets/gym_photo4.jpg';

export const Clubs = () => {
   const clubs = [
      {
         id: "0",
         name: "Fight Club 01",
         time: "ПН-СБ 07:00-23:00",
         address: 'Вулиця 1',
         city: "Київ",
         clubPhoto: gym1
      },
      {
         id: "1",
         name: "Fight Club 02",
         time: "ПН-СБ 07:00-23:00",
         address: 'Вулиця 2',
         city: "Київ",
         clubPhoto: gym2
      },
      {
         id: "2",
         name: "Fight Club 03",
         time: "ПН-СБ 07:00-23:00",
         address: 'Вулиця 3',
         city: "Київ",
         clubPhoto: gym3
      },
      {
         id: "3",
         name: "Fight Club 04",
         time: "ПН-СБ 07:00-23:00",
         address: 'Вулиця 4',
         city: "Львів",
         clubPhoto: gym4
      }
   ]; 
   const [filter, setFilter] = useState("Усі");
   

      const filteredClubs = filter === "Усі" ? clubs : clubs.filter(club => club.city === filter);
   
      return <section className="Clubs" id="Clubs">
            <Container>
               <div className="mb-4 ">
                  <Button variant="outline-light" size="lg" onClick={() => setFilter('Усі')} className="mx-2">
                     Усі клуби
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => setFilter('Київ')} className="mx-2">
                     Київ
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => setFilter('Львів')} className="mx-2">
                     Львів
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