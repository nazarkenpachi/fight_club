import React from 'react';

export const TeamCard = ({ data, reverse = false, ...rest}) => {
  const isCoach = data.experience !== undefined;

  return (
    <div className={`team-card ${reverse ? 'team-card-reverse' : ''}`}{...rest}>
      <div className="team-card-container">
        <div className={`team-card-content ${reverse ? 'team-card-content-reverse' : ''}`}>
          <h3 className="team-card-title">{data.name}</h3>
          
          {isCoach ? (
            <>
              <p className="team-card-description">{data.experience}</p>
              
              <div className="team-card-section">
                <p>Останні перемоги:</p>
                <ul className="team-card-list">
                  {data.lastWins.map((win, index) => (
                    <li key={index} className="team-card-list-item">{win}</li>
                  ))}
                </ul>
              </div>
              
              <p className="team-card-price">
                Ціна за заняття: {data.price}
              </p>
              
              <button className="team-card-button">
                Записатись до наставника
              </button>
            </>
          ) : (
            <>
               <p>Зріст: {data.height}</p>
               <p>Вага: {data.weight}</p>
              
               <div className="team-card-section">
                  <p>Останній виграний бій:</p>
                  <p className="team-card-win">{data.lastWin}</p>
               </div>
              
              <button className="team-card-button">
                Дивитись в ютубі
              </button>
            </>
          )}
        </div>
        <div className={`team-card-image-container ${reverse ? 'team-card-image-right' : ''}`}>
          <img src={data.imgUrl} alt={data.name} className={`team-card-image ${isCoach ? 'team-card-image-coach' : 'team-card-image-fighter'}`} />
        </div>
      </div>
    </div>
  );
};