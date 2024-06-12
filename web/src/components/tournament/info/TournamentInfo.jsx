import { SlCalender } from 'react-icons/sl';
import { FaCircle } from 'react-icons/fa6';
import { SlTrophy, SlLocationPin, SlLock, SlUser } from 'react-icons/sl';
import './TournamentInfo.css';
import EditTournamentButton from './edit/EditTournamentButton';
import { useContext } from 'react';
import { AuthContext } from '../../../api/AuthContext';

const TournamentInfo = ({ tournamentId, tournament, setTournament }) => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div id="tournament-info">
      <div className="image">
        <img src={tournament.imageURL} alt="Tournament" />
      </div>
      <div className="info">
        <div className="info-header">
          {userInfo.logged && tournament.user.id == userInfo.id ? (
            <EditTournamentButton
              tournamentId={tournamentId}
              tournament={tournament}
              setTournament={setTournament}
            />
          ) : null}
          <span className="name">{tournament.name}</span>
          {tournament.privacy == 'Private' ? <SlLock size={20} /> : null}
        </div>
        <p> {tournament.description}</p>
        <div className="profile-link">
          <SlUser color="grey"/>
          <a href={`/profile/${tournament.user.id}`}>
          <span>{tournament.user.username}</span>
          </a>
        </div>
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
  );
};

export default TournamentInfo;
