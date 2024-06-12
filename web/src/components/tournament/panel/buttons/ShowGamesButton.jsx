import { useState } from 'react';
import GameList from '../../../gameList/GameList';

import './TournamentPanelButton.css';
import BasicModal from '../../../modal/basic/BasicModal';

const ShowGamesButton = ({
  tournamentId,
  games,
  teams,
  setTournament,
  tournamentStatus,
  tournamentUserId,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="panel-button">
      <button onClick={() => setModalIsOpen(true)}>Results</button>
      <BasicModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'GAMES'}
      >
        <GameList
          tournamentId={tournamentId}
          games={games}
          teams={teams}
          setTournament={setTournament}
          tournamentStatus={tournamentStatus}
          tournamentUserId={tournamentUserId}
        />
      </BasicModal>
    </div>
  );
};

export default ShowGamesButton;
