import { Container, Row, Col } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import aboutPhoto1 from '../assets/about_photo1.jpg';
import aboutPhoto2 from '../assets/about_photo2.jpg';
import aboutPhoto3 from '../assets/about_photo3.jpg';
import aboutPhoto4 from '../assets/about_photo4.jpg';
import aboutPhoto5 from '../assets/about_photo5.jpg';
import CursorFollower from "./CursorFollower";

export const AboutPage = () => {
   const aboutInfo = [
      {
         id: "0",
         title: "Amogus",
         description: "Dota 2, Defense of the Ancients — багатокористувацька відеогра в піджанрі MOBA, автономне продовження ідей карти DotA для гри Warcraft III: Reign of Chaos і її модифікації Warcraft III: The Frozen Throne. Dota 2 випущена компанією Valve Corporation для платформи Microsoft Windows в публічній бета-версії у 2011 році.",
         imgUrl: aboutPhoto1
      },
      {
         id: "1",
         title: "Bebra",
         description: "Tokyo Ghoul — манґа в жанрі темне фентезі Суї Ішіди. Випускалася в сейнен-журналі Weekly Young Jump видавництва Shueisha з вересня 2011 року по вересень 2014 року і зібрана в танкобон з 14-ти томів. Приквел під назвою Tokyo Ghoul [Jack] публікувався онлайн на Jump Live в 2013 році і складається з одного тому.",
         imgUrl: aboutPhoto2
      },
      {
         id: "2",
         title: "Skibidi",
         description: "Хінка́лі — грузинська страва, подібна до вареників та пельменів, а ще більше — до тюркських мантів чи монгольських буузів, один з різновидів кулінарних виробів з вареного тіста з начинкою з м'ясного фаршу. Головне, що відрізняє від інших страв такого виду, — це тонке тісто та бульйон усередині.",
         imgUrl: aboutPhoto3
      },
      {
         id: "3",
         title: "B1dess",
         description: "«Бійці́вський клуб» — культовий американський художній фільм 1999 року. Це адаптація однойменного роману Чака Поланіка, опублікованого в 1996 році. Ідея проєкту належала продюсеру Лорі Зіскін, яка залучила до нього сценариста Джима Ульса і режисера Девіда Фінчера.",
         imgUrl: aboutPhoto4
      },
      {
         id: "4",
         title: "John Gym",
         description: "So when Ashton Hall dives in the air for 4 minutes he gets aura, but when I, win a 20v1, I get negative 1000 aura? Wow, now I see how it is.",
         imgUrl: aboutPhoto5
      },
   ];
   const firstColumn = aboutInfo.slice(0, 3);
   const secondColumn = aboutInfo.slice(3);

   return (
      <section className="about" id="about" style={{ position: "relative" }}>
         <CursorFollower />
         <Container>
            <Row>
               <Col xs={12} md={12} xl={4}>
                  <div className="about-left-text">
                     <h2>Ми - команда Zombie Fighters, яка втілює вашу мрію в реальність</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus rem ipsa ea ipsam maiores quidem blanditiis dolore consequuntur eius recusandae repellendus eos, praesentium animi. Quidem delectus error placeat incidunt et.</p>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={4}>
                  {firstColumn.map(item => (
                     <AboutCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                     />
                  ))}
               </Col>
               <Col xs={12} md={6} xl={4}>
                  {secondColumn.map(item => (
                     <AboutCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                     />
                  ))}
               </Col>
            </Row>
         </Container>
      </section>
   );
}