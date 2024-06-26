import React, { useState } from 'react';
import '../styles/SignUpPage.css'



const SignUpPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long, contain at least one letter, one number, and one special character.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // For now, just log the details
    console.log(`Name: ${name}, Age: ${age}, Username: ${username}, Password: ${password}`);
    setErrorMessage('');
    alert('Account created successfully!');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <small>Password must be at least 8 characters long, contain at least one letter, one number, and one special character (!,@,#,$,%,^,&,*).</small>
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default SignUpPage;
