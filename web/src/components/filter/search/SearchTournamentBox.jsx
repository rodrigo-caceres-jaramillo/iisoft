import { FaSearch } from 'react-icons/fa';
import './SearchTournamentBox.css';

const SearchTournamentBox = ({ inputText, setInputText, handleSubmit }) => {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleClick = () => {
    handleSubmit();
  };

  return (
    <div className="search-bar">
      <button onClick={handleClick}>
        <FaSearch size={16} />
      </button>
      <input
        type="text"
        placeholder="Search tournament..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchTournamentBox;
