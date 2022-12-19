import React, {useState} from 'react';
// import PropTypes from 'prop-types';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(username, password, email, birthday);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("SIGNUP_URL", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

return (
  <form  onSubmit={handleSubmit}>
    <h1>Create Account</h1>
    <label>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
    </label>
    <label>
      Username:
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} required />
    </label>
    <label>
      Username:
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
    </label>
    <label>
      Username:
      <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} required />
    </label>
    <button type="submit">Sign up</button>
  </form>
  );
}



// RegistrationView.propTypes = {
//   onRegistration: PropTypes.func.isRequired,
// };
