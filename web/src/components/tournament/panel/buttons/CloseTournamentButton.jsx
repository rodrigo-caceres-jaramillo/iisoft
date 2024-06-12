import { useContext, useState } from 'react';
import { AuthContext } from '../../../../api/AuthContext';
import './TournamentPanelButton.css';
import ConfirmationModal from '../../../modal/confirmation/ConfirmationModal';

const CloseTournamentButton = ({ tournamentId, setTournament, setIsOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { closeTournament } = useContext(AuthContext);

  const handlerCloseTournament = () => {
    closeTournament(tournamentId, setTournament, setIsOpen);
    setModalIsOpen(false);
  };

  return (
    <div className="panel-button">
      <button className="red" onClick={() => setModalIsOpen(true)}>
        Close
      </button>
      <ConfirmationModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'Do you really want to close the tournament ?'}
        action={() => handlerCloseTournament()}
      />
    </div>
  );
};

export default CloseTournamentButton;
