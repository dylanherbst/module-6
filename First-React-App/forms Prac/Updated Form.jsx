import { useState } from 'react'

// new state value for showing submission messages to user
const [submitResult, setSubmitResult] = useState('');

const HandleSubmit = (e) => {
  e.preventDefault(); // prevent page reloading on form submit

  // add some password validation
  if (userPassword.length < 5) {
    setSubmitResult('Password must be at least 5 characters long');
  } else if (userPassword === userEmail) {
    setSubmitResult('Password must not match email address');
  } else {
    setSubmitResult('Successful login.');
  }


  return (
      <div className="LoginForm componentBox">
          <form onSubmit={handleSubmit}>
              {/* same form code as previously, BUT now includes                     <form> and <button> */}
              <button>Log In</button>
              <p>{submitResult}</p>
          </form>
      </div>
  )
  }

  export default HandleSubmit