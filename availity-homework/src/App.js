import './App.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

function App() {

  //useState to update States for Registration
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[npiNumber, setNPInumber] = useState("");
  const[busAddress, setBusAddress] = useState("");
  const[phoneNumber, setPhoneNum] = useState("");
  const[emailAddress, setEmailAddress] = useState("");
  //LISP
  const[lispinput, setLispChecker] = useState("");

  //Error Check and Validation
  const[submitted, setSubmitted] = useState(false);
  const[error, setError] = useState(false);
  //LISP
  const[submitcheck, setSubmitChecker] = useState(false);
  const[errorcheck, setErrorChecker] = useState(false);

  //Handle form field changes
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };
  const handleNPInumber = (e) => {
    setNPInumber(e.target.value);
    setSubmitted(false);
  };
  const handleBusinessAddress = (e) => {
    setBusAddress(e.target.value);
    setSubmitted(false);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
    setSubmitted(false);
  };
  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
    setSubmitted(false);
  };
  //LISP
  const handleLISPChecker = (e) => {
    setLispChecker(e.target.value);
    setSubmitted(false);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if(firstName === '' || lastName === '' || npiNumber === '' || 
    busAddress === '' || phoneNumber === '' || emailAddress === ''){
      setError(true);
      console.log("ERROR: Please fill in all registration fields");
    }
    else{
      setSubmitted(true);
      setError(false);
      console.log("SUCCESS");
    }
  };

  //Show popup modal Success
  const successPopup = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}>
        <Alert severity="success">User {firstName} successfully registered!!</Alert>
      </div>
    );
  };

  //Show popup modal error if error
  const errorPopup = () => {
    return (
      <div style={{display: error ? '' : 'none'}}>
        <Alert severity="error">Please enter all mandatory fields - Try Again!</Alert>
      </div>
      
    );
  };

  // LISP Solution Q2
  function LISPChecker(input){
    console.log("text input: "+ input);
    let array = [];

    for(let i=0; i<input.length; i++){
      let value = input[i];

      if(value === '('){
        array.push(value);
        continue;
      }

      if (array.length === 0) return false;

      switch(value){
        case ')':
          array.pop();
          break;
        default:
          break;
      }
    }
    return (array.length === 0);
  }

  const handleLISPSubmission = (e) => {
    e.preventDefault();
    setErrorChecker(false);
    setSubmitChecker(false);
    if(lispinput === ''){
      setErrorChecker(true);
      console.log("ERROR Please add string");
    }
    else{
      setErrorChecker(false);
      if(!LISPChecker(lispinput)){
        setErrorChecker(true);
        console.log("ERROR: parenthesis not closed");
      }
      else{
        setSubmitChecker(true);
        console.log("Success: parenthesis closed");
      }
    }
  };

  //Show popup modal Success
  const successChecker = () => {
    return (
      <div
        style={{
          display: submitcheck ? '' : 'none',
        }}>
        <Alert severity="success">LISP Paranthesis Checker success!</Alert>
      </div>
    );
  };
  
  //Show popup modal error if error
  const errorChecker = () => {
    return (
      <div style={{display: errorcheck ? '' : 'none'}}>
        <Alert severity="warning">Warning: Parenthesis Not Closed</Alert>
      </div>
      
    );
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h2>Availity Homework Form</h2>
        <div>
          {errorPopup()}
          {successPopup()}
        </div>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            maxWidth: 'md'
          }}
          noValidate
          autoComplete="off">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            helperText="Enter your First Name"
            onChange={handleFirstName}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            helperText="Enter your Last Name"
            onChange={handleLastName}
          />
          <TextField
            id="outlined-basic"
            label="NPI number"
            variant="outlined"
            helperText="Enter your NPI number"
            onChange={handleNPInumber}
          />
          <TextField
            id="outlined-basic"
            label="Business Address"
            variant="outlined"
            helperText="Enter your physical Business Address"
            onChange={handleBusinessAddress}
          />
          <TextField 
            id="outlined-basic"
            label="Telephone Number"
            helperText="Enter valid 9 digit phone number"
            variant="outlined"
            onChange={handlePhoneNumber}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            helperText="e.g. name@gmail.com"
            onChange={handleEmailAddress}
            type="email"
          />
          <Button 
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleFormSubmission}
            endIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </Container>

      <Container maxWidth="sm">
        <h2>Paranthesis Checker</h2>

        <div>
          {errorChecker()}
          {successChecker()}
        </div>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}
          noValidate
          autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Parenthesis Checker"
            variant="outlined"
            helperText="Enter a string of parenthesis"
            onChange={handleLISPChecker}
          />
          <Button 
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleLISPSubmission}
            endIcon={<SendIcon />}>
            Check for Properly Closed Paranthesis
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
