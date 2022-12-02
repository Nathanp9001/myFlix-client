import React, {useState} from 'react';
import PropTypes from 'prop-types';

export function registrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
  };

return (
  <form>
    <h1>Create Account</h1>
    <label>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
    <label>
      Username:
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <label>
      Username:
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
    </label>
    <label>
      Username:
      <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
    </label>
    <button type="submit" onClick={handleSubmit}>Sign up</button>
  </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
