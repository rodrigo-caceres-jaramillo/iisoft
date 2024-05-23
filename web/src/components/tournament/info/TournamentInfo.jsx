import { SlCalender } from 'react-icons/sl';
import { FaCircle } from 'react-icons/fa6';
import { SlTrophy, SlLocationPin } from 'react-icons/sl';
import './TournamentInfo.css';

const TournamentInfo = ({ tournament }) => {
  return (
    <div id="tournament-info">
      <div className="image">
        <img src={tournament.imageURL} alt="Tournament" />
      </div>
      <div className="info">
        <h2> {tournament.name}</h2>
        <p> {tournament.description}</p>
        <div>
          <SlTrophy color="grey" />
          <span>{tournament.sport}</span>
        </div>
        <div>
          <SlCalender color="grey" />
          <span>{tournament.date}</span>
        </div>
        <div>
          <SlLocationPin color="grey" />
          <span>{tournament.location}</span>
        </div>
        <div className="status">
          {tournament.status === 'true' ? (
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
  );
};

export default TournamentInfo;
