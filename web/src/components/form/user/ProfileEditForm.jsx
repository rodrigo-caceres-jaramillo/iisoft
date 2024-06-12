import { useContext, useState } from 'react';
import { AuthContext } from '../../../api/AuthContext.jsx';
import {
  FormButton,
  FormSubmitButton,
  SecelectInput,
  SimpleInput,
  ToggleSwitch,
} from '../Form.jsx';

const ProfileEditForm = ({
  userId,
  oldUserInfo,
  setUserInfo,
  close,
}) => {
  const [username, setUsername] = useState(oldUserInfo.username);
  const [sport, setSport] = useState(oldUserInfo.sport);
  const [location, setLocation] = useState(oldUserInfo.location);
  const [description, setDescription] = useState(oldTournament.description);
  const [imageURL, setimageURL] = useState(oldTournament.imageURL);
  const [showImageInput, setShowImageInput] = useState(false);
  const { setError, putTornament, sports, locations } = useContext(AuthContext);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggleChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const addTeam = () => {
    if (teamName.trim() === '') return;
    if (
      teams.find((team) => team.name.toLowerCase() === teamName.toLowerCase())
    ) {
      setError('Team name already exists.');
      return;
    }
    setTeams([...teams, { name: teamName }]);
    setTeamName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      !tournamentName ||
      !sport ||
      !description ||
      !selectedDate ||
      !location
    ) {
      setError('Please fill out all fields.');
      return;
    }
    if (teams.length < 2) {
      setError('Please add at least 2 teams.');
      return;
    }
    var privacy = 'Public';
    if (isSwitchOn) {
      privacy = 'Private';
    }
    const teamsNames = teams.map((team) => team.name);

    putTornament(
      tournamentName,
      description,
      selectedDate,
      teamsNames,
      sport,
      imageURL,
      location,
      privacy,
      tournamentId,
      setTournament,
    );
    close();
  };

  const handleDateChange = (selectedDate) => {
    const today = new Date().toISOString().split('T')[0];
    if (selectedDate < today) {
      setError('Please select a date equal to or after today.');
    } else {
      setSelectedDate(selectedDate);
    }
  };

  const handleImageUrlChange = (url) => {
    checkIfImageExists(url, (isValidUrl) => {
      if (isValidUrl) {
        setimageURL(url);
      } else {
        setError('The image url is invalid, choose another one');
      }
    });
  };

  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      img.onerror = () => {
        callback(false);
      };
    }
  }

  return (
    <div className="tournament-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="big-section">
            <SimpleInput
              name={'Name *'}
              value={tournamentName}
              set={setTournamentName}
            />
          </div>
          <div className="small-section">
            <SecelectInput
              name={'Sport *'}
              list={sports}
              value={sport}
              set={setSport}
            />
          </div>
        </div>
        <div className="row">
          <div className="big-section">
            <SimpleInput
              name={'Description *'}
              value={description}
              set={setDescription}
            />
          </div>
          <div className="small-section">
            <SecelectInput
              name={'Province *'}
              list={locations}
              value={location}
              set={setLocation}
            />
          </div>
        </div>
        <div className="row">
          <div className="big-section">
            <SimpleInput
              name={'Date *'}
              type={'date'}
              value={selectedDate}
              set={handleDateChange}
            />
          </div>
          <div className="private-section">
            <ToggleSwitch
              name="Private"
              isChecked={isSwitchOn}
              onChange={handleToggleChange}
            />
          </div>
          <div className="button-section">
            <FormButton
              name={'Image'}
              text={'Add Image'}
              onClick={() => setShowImageInput(!showImageInput)}
            />
          </div>
        </div>
        <div className="row">
          {showImageInput ? (
            <SimpleInput
              name={'Image URL'}
              value={imageURL}
              set={handleImageUrlChange}
            />
          ) : null}
        </div>
        <div className="row">
          <div className="big-section">
            <SimpleInput name={'Teams *'} value={teamName} set={setTeamName} />
          </div>

          <div className="button-section">
            <FormButton text={'Add Team'} onClick={() => addTeam()} />
          </div>
        </div>
        <div className="teams">
          {teams.map((team, index) => (
            <div className="team-item" key={index}>
              {team.name}
            </div>
          ))}
        </div>
        <FormSubmitButton text={'Edit'} />
      </form>
    </div>
  );
};

export default ProfileEditForm;
