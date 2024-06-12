import { useContext } from 'react';
import AddResultButton from './buttons/AddResultButton';
import CloseTournamentButton from './buttons/CloseTournamentButton';
import DeleteTournamentButton from './buttons/DeleteTournamentButton';
import ShowGamesButton from './buttons/ShowGamesButton';
import './TournamentPanel.css';
import { AuthContext } from '../../../api/AuthContext';

const TournamentPanel = ({ tournamentId, tournament, setTournament }) => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="tournament-panel">
      <div className="top-section">
        <ShowGamesButton
          tournamentId={tournamentId}
          games={tournament.games}
          teams={tournament.teams}
          setTournament={setTournament}
          tournamentStatus={tournament.status}
          tournamentUserId={tournament.user.id}
        />
        {userInfo.logged &&
        tournament.user.id == userInfo.id &&
        tournament.status === 'Open' ? (
          <AddResultButton
            tournamentId={tournamentId}
            teams={tournament.teams}
            setTournament={setTournament}
          />
        ) : null}
      </div>
      <div className="bottom-section">
        {userInfo.logged && tournament.user.id == userInfo.id ? (
          tournament.status === 'Open' ? (
            <CloseTournamentButton
              tournamentId={tournamentId}
              setTournament={setTournament}
            />
          ) : (
            <DeleteTournamentButton tournamentId={tournamentId} />
          )
        ) : null}
      </div>
    </div>
  );
};

export default TournamentPanel;
