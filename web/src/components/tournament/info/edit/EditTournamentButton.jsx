import { useState } from 'react';
import BasicModal from '../../../modal/basic/BasicModal';
import TournamentEditForm from '../../../form/tournament/TournamentEditForm';
import './EditTournamentButton.css';
import { FaRegEdit } from 'react-icons/fa';

const EditTournamentButton = ({ tournamentId, tournament, setTournament }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button
        className="edit-tournament-button"
        onClick={() => setModalIsOpen(true)}
      >
        <FaRegEdit size={20} />
      </button>
      <BasicModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'EDIT TOURNAMENT'}
      >
        <TournamentEditForm
          tournamentId={tournamentId}
          oldTournament={tournament}
          setTournament={setTournament}
          close={() => setModalIsOpen(false)}
        />
      </BasicModal>
    </div>
  );
};

export default EditTournamentButton;
