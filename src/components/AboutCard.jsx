export const AboutCard = ({title, description, imgUrl}) => {
   return <div className="about-infobx">
      <div className="about-imgbx">
         <img src={imgUrl} alt="" />
      </div>
      <div className="about-txtx">
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   </div>;
}