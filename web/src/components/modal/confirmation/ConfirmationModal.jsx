import ReactDom from 'react-dom';
import './ConfirmationModal.css';

const ConfirmationModal = ({ open, onClose, header, action }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-modal" onClick={onClose} />
      <div className="confirmation-modal">
        <div className="header">
          <span>{header}</span>
          <button className="close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="buttons">
          <button onClick={action}>YES</button>
          <button onClick={onClose}>NO</button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default ConfirmationModal;
