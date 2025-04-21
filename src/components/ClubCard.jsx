import { GeoAlt, Calendar, ArrowRightCircle } from "react-bootstrap-icons";

export const ClubCard = ({name, time, address, city, imgUrl}) => {
   return <div className="club-infobx">
            <div className="club-imgbx">
               <img src={imgUrl} alt="" />
               <h4>{name}</h4>
               <ArrowRightCircle size={35}/>
            </div>
            <div className="club-txtx">
               <span><GeoAlt size={18}/> {address}, {city}<br></br></span>
               <span><Calendar size={18}/> {time}</span>
            </div>
         </div>;

}