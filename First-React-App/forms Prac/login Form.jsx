import { useState } from 'react'
import HandleSubmit from './submit Comp';

function LoginForm() {
// input state values always need to be strings - empty initially
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');
const MAX_ATTEMPTS = 3;
const [attemptCount, setAttemptCount] = useState(0);
const [isLockedOut, setIsLockedOut] = useState(false);
const [submitResult, setSubmitResult] = useState('');

const handleFormSubmit = (e) => {
    e.preventDefault();
    HandleSubmit({ userEmail, userPassword, setAttemptCount, setIsLockedOut, setSubmitResult, isLockedOut, MAX_ATTEMPTS });
};

return (
    

<div className="LoginForm componentBox">
<form onSubmit={(e) => e.handleFormSubmit()}>
<div className="formRow">

<label>Email Address:

<input type="email" value={userEmail} name="userEmail"
onChange={(e) => setUserEmail(e.target.value)} />
</label>
</div>
<div className="formRow">
<label>Password:
<input type="password" value={userPassword} name="password"
onChange={(e) => setUserPassword(e.target.value)} />
</label>
</div>
<div>
    Email in State: {userEmail}
</div>
<div>
    password in State: {userPassword}
</div>
<button type="submit" disabled={isLockedOut}>Log In</button>
<HandleSubmit 
                    userEmail={userEmail} 
                    userPassword={userPassword} 
                    setAttemptCount={setAttemptCount} 
                    setIsLockedOut={setIsLockedOut} 
                    setSubmitResult={setSubmitResult} 
                    isLockedOut={isLockedOut} 
                    MAX_ATTEMPTS={MAX_ATTEMPTS} 
                />
</form>
<p>{submitResult}</p>
</div>

)
}

// try removing the onChange prop and typing in a field
export default LoginForm