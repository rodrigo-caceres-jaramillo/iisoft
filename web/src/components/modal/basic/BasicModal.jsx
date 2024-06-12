import ReactDom from 'react-dom';
import './BasicModal.css';

const BasicModal = ({ open, children, onClose, header }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-modal" onClick={onClose} />
      <div className="modal">
        <div className="header">
          <h3>{header}</h3>
          <button className="close" onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default BasicModal;
