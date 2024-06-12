import { NavLink } from 'react-router-dom';
import './SimpleFeaturedTournament.css';

const SimpleFeaturedTournament = ({ tournament }) => {
  return (
    <div className="simple-featured-tournament">
      <div className="image-container">
        <img src={tournament.imageURL} alt="Tournament" />
        {tournament.status === 'Open' ? (
          <>
            <div className="status-label open">OPEN</div>
          </>
        ) : (
          <>
            <div className="status-label closed">CLOSED</div>
          </>
        )}
      </div>
      <div className="content">
        <NavLink to={`/tournament/${tournament.id}`}>
          <span className="name">{tournament.name}</span>
        </NavLink>
        <div>
          <span>{tournament.sport}</span>
        </div>
        <div className="fotter">
          <span className="first">{formatDate(tournament.date)}</span>
          <span>{tournament.location}</span>
        </div>
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year.slice(-2)}`;
};

export default SimpleFeaturedTournament;
