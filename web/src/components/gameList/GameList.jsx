import { useContext } from 'react';
import SimpleGame from './simple/SimpleGame';
import { AuthContext } from '../../api/AuthContext';

const GameList = ({
  tournamentId,
  games,
  teams,
  setTournament,
  tournamentStatus,
  tournamentUserId,
}) => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="game-list element">
      {games.length ? (
        games.map((game, index) => (
          <SimpleGame
            tournamentId={tournamentId}
            game={game}
            teams={teams}
            setTournament={setTournament}
            key={index}
            tournamentStatus={tournamentStatus}
            userInfo={userInfo}
            tournamentUserId={tournamentUserId}
          />
        ))
      ) : (
        <p>Nothing to show yet.</p>
      )}
    </div>
  );
};

export default GameList;
