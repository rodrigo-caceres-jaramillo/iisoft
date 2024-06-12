import { NavLink } from 'react-router-dom';
import './SimpleTournament.css';
import { SlCalender, SlTrophy, SlLocationPin, SlLock } from 'react-icons/sl';
import { FaCircle } from 'react-icons/fa6';

const SimpleTournament = ({ tournament }) => {
  return (
    <div className="simple-tournament">
      <div className="image">
        {tournament.imageURL ? (
          <img src={tournament.imageURL}></img>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <div className="content">
        {tournament.name && tournament.description && tournament.date ? (
          <div className="info">
            <NavLink to={`/tournament/${tournament.id}`}>
              <span className="name">{tournament.name}</span>
              {tournament.privacy == 'Private' ? <SlLock /> : null}
            </NavLink>
            <div>{tournament.description}</div>
            <div className="fotter">
              <div className="section">
                <SlCalender />
                <span>{tournament.date}</span>
              </div>
              <div className="section">
                <SlTrophy color="grey" />
                <span>{tournament.sport}</span>
              </div>
              <div className="last">
                <SlLocationPin color="grey" />
                <span>{tournament.location}</span>
              </div>
              <div className="status">
                {tournament.status === 'Open' ? (
                  <>
                    <FaCircle color="green" />
                    <span>OPEN</span>
                  </>
                ) : (
                  <>
                    <FaCircle color="red" />
                    <span>CLOSED</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Sorry, no info available.</p>
        )}
      </div>
    </div>
  );
};

export default SimpleTournament;
