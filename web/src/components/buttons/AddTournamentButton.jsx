import './AddButton.css';
import BasicModal from '../modal/basic/BasicModal';
import { useState } from 'react';
import TournamentForm from '../form/tournament/TournamentForm';

const AddTournamentButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="add-button">
      <button onClick={() => setModalIsOpen(true)}>+</button>
      <BasicModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'CREATE TOURNAMENT'}
      >
        <TournamentForm />
      </BasicModal>
    </div>
  );
};

export default AddTournamentButton;
