import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../api/AuthContext';
import './TournamentPanelButton.css';
import ConfirmationModal from '../../../modal/confirmation/ConfirmationModal';

const DeleteTournamentButton = ({ tournamentId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { DeleteTournament } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerDeleteTournament = () => {
    setModalIsOpen(false);
    DeleteTournament(tournamentId, navigate);
  };

  return (
    <div className="panel-button">
      <button className="red" onClick={() => setModalIsOpen(true)}>
        Delete
      </button>
      <ConfirmationModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'Do you really want to delete the tournament ?'}
        action={() => handlerDeleteTournament()}
      />
    </div>
  );
};

export default DeleteTournamentButton;
