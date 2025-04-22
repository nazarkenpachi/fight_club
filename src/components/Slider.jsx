import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";
import logo10 from "../assets/logo10.svg";
import { Container } from "react-bootstrap";

export const Slider = () => {
   return <section className="slider">
      <Container>
         <h2>ПАРТНЕРИ</h2>
      </Container>
      <div className="logos">
         <img src={logo1} alt="" />
         <img src={logo2} alt="" />
         <img src={logo3} alt="" />
         <img src={logo4} alt="" />
         <img src={logo5} alt="" />
         <img src={logo6} alt="" />
         <img src={logo7} alt="" />
         <img src={logo8} alt="" />
         <img src={logo9} alt="" />
         <img src={logo10} alt="" />

         <img src={logo1} alt="" />
         <img src={logo2} alt="" />
         <img src={logo3} alt="" />
         <img src={logo4} alt="" />
         <img src={logo5} alt="" />
         <img src={logo6} alt="" />
         <img src={logo7} alt="" />
         <img src={logo8} alt="" />
         <img src={logo9} alt="" />
         <img src={logo10} alt="" />

      </div>
   </section>;
}