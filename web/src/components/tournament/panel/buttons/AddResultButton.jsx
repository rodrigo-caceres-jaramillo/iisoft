import { useState } from 'react';
import GameForm from '../../../form/game/GameForm';

import './TournamentPanelButton.css';
import BasicModal from '../../../modal/basic/BasicModal';

const AddResultButton = ({ tournamentId, teams, setTournament }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="panel-button">
      <button onClick={() => setModalIsOpen(true)}>+</button>
      <BasicModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'ADD RESULT'}
      >
        <GameForm
          tournamentId={tournamentId}
          teams={teams}
          setTournament={setTournament}
          close={() => setModalIsOpen(false)}
        />
      </BasicModal>
    </div>
  );
};

export default AddResultButton;
