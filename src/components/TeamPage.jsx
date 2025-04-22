import { Container, Row, Col} from "react-bootstrap";
import React, { useEffect } from "react";
import { TeamCard } from "./TeamCard";
import AOS from "aos";
import "aos/dist/aos.css";
import coach1 from "../assets/coach1.png";
import coach2 from "../assets/coach2.png";
import fighter1 from "../assets/fighter1.jpg";
import fighter2 from "../assets/fighter2.jpg";

export const TeamPage = () => {
   const coachInfo = [
      {
         name: "Бідес Юрченко",
         experience: "Працював вбиральником, а після того, як люди продовжували ходити по помитій підлозі, пробудив в собі демона і почав лупцювати всіх. Його замітив не мало популярний тренер Джон Тяжка Рука і запропонував почати тренуватись",
         lastWins: ["Майк Тайдсон - Бідес Юрченко / ПЕРЕМОГА НОКАУТОМ", "Бідес Юрченко - Богдан Міхєєв / ТЕХНІЧНА ПЕРЕМОГА"],
         price: "100 грн",
         imgUrl: coach1
      },
      {
         name: "Назар Кенпачі",
         experience: "Похмурий тип, любить паркур. Тренувався разом з Ронні Коулманом, Девідом Лейдом, Tren Twins. Маловідомий факт, але саме він тренував Усика на початку його кар'єри. Улюблений напій - білий Monster, улюблений персонаж в Доті - Wraith King. Здатен вдарити 8 ударів за пів секунди. ",
         lastWins: ["Назар Кенпачі - Валерій Мазченко / ПЕРЕМОГА", "Назар Кенпачі - Шакал Бебрович / ТЕХНІЧНА ПЕРЕМОГА"],
         price: "200 грн",
         imgUrl: coach2
      }
   ]
   const fightersInfo = [
      {
         name: "Міхєй Богданов",
         height: "162см",
         weight: "85кг",
         lastWin: "Міхєй Богданов - Заракі Кенпачі",
         imgUrl: fighter1
      },
      {
         name: "Олежа Кошмар",
         height: "189см",
         weight: "79кг",
         lastWin: "Олежа Кошмар - Monkey King",
         imgUrl: fighter2
      }
   ]
   useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
    }, []);

   return <section className="team-page">
      <Container>
        <h2>НАША ГОРДІСТЬ</h2>
        <div>
          <h3>НАСТАВНИКИ</h3>
          <div>
            {coachInfo.map((coach, index) => (
              <TeamCard key={index} data={coach} reverse={index % 2 !== 0} data-aos="fade-up" data-aos-delay={index * 150}/>
            ))}
          </div>
        </div>
        
        <div>
          <h3>ЛЕГЕНДАРНІ БІЙЦІ</h3>
          <div>
            {fightersInfo.map((fighter, index) => (
              <TeamCard key={index} data={fighter} reverse={index % 2 !== 0} data-aos="fade-up" data-aos-delay={index * 150}/>
            ))}
          </div>
        </div>
      </Container>
   </section>;
}