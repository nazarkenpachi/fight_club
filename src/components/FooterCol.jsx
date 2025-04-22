export const FooterCol = ({name, address, city}) => {
   return <div className="footer-col"> 
      <h3>{name}</h3>
      <p>{address}, {city}</p>
   </div>
}