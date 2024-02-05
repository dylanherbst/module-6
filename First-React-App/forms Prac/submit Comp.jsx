  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState('');

  
//   const HandleSubmit = (e) => {
//     e.preventDefault(); // prevent page reloading on form submit

const HandleSubmit = ({ userEmail, userPassword, setAttemptCount, setIsLockedOut, setSubmitResult, isLockedOut, MAX_ATTEMPTS }) => {
    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long');
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address');
    } else {
      setSubmitResult('Successful login.');
    }

    if (userPassword === userPassword) {
        setSubmitResult('Successful login.');
        setAttemptCount(0);
        return true;
    } else {
        setSubmitResult('Incorrect password.');
        setAttemptCount(prev => prev + 1);
    } 

    if (prev + 1 >= MAX_ATTEMPTS) {
        setIsLockedOut(true);
        setSubmitResult('Account locked due to too many incorrect attempts.');
        return false;
    }




    // return (
    //     <div className="LoginForm componentBox">
    //         <form onSubmit={handleSubmit}>
    //             {/* same form code as previously, BUT now includes form and button                  <form> and <button> */}
    //             <button>Log In</button>
    //             <p>{submitResult}</p>
    //         </form>
    //     </div>
    // )

    return (
        <div>
            <button onClick={handleSubmit} disabled={isLockedOut}>Log In</button>
        </div>
    );
}


export default HandleSubmit