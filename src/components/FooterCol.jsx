export const FooterCol = ({title, items}) => {
   return <div className="footer-col"> 
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            {item}
          </li>
        ))}
      </ul>
   </div>
}