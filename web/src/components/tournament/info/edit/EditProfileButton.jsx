import { useState } from 'react';
import BasicModal from '../../../modal/basic/BasicModal';
import TournamentEditForm from '../../../form/tournament/TournamentEditForm';
import './EditTournamentButton.css';
import { FaRegEdit } from 'react-icons/fa';

const EditProfileButton = ({ userId, userInfo, setUserInfo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button
        className="edit-profile-button"
        onClick={() => setModalIsOpen(true)}
      >
        <FaRegEdit size={20} />
      </button>
      <BasicModal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        header={'EDIT USER INFO'}
      >
        <ProfileEditForm
          userId={userId}
          oldUserInfo={userInfo}
          setUser={setUserInfo}
          close={() => setModalIsOpen(false)}
        />
      </BasicModal>
    </div>
  );
};

export default EditProfileButton;
