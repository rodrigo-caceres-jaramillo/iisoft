import './Form.css';
import PhoneInput from 'react-phone-number-input/input';

export const SimpleInput = ({ name, value, set, type = 'text' }) => (
  <div className="input-container">
    <div className="input-label">{name}</div>
    <input
      className="form-input"
      type={type}
      value={value}
      onChange={(e) => set(e.target.value)}
    />
  </div>
);

export const SecelectInput = ({ name, list, value, set }) => (
  <div className="input-container">
    <div className="input-label">{name}</div>
    <select
      className="form-select"
      value={value}
      onChange={(e) => set(e.target.value)}
    >
      <option value="">Select {name}</option>
      {list.map((option, index) => (
        <option key={index} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export const ToggleSwitch = ({ name, isChecked, onChange }) => {
  return (
    <div className="input-container">
      <div className="input-label">{name}</div>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export const FormSubmitButton = ({ text }) => (
  <div>
    <button className="form-submit-button" type="submit">
      {text}
    </button>
  </div>
);

export const FormButton = ({ name, text, onClick }) => (
  <div className="input-container">
    {name ? <div className="input-label">{name}</div> : null}
    <button className="form-button" type="button" onClick={onClick}>
      {text}
    </button>
  </div>
);
export const PhoneInputComponent = ({ country, value, onChange }) => (
  <div className="input-container">
    <div className="input-label">Phone *</div>
    <PhoneInput
      country={country}
      value={value}
      onChange={onChange}
      className="form-input"
    />
  </div>
);
