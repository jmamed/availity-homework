import './App.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function App() {

  //useState to update States for Registration
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[npiNumber, setNPInumber] = useState("");
  const[busAddress, setBusAddress] = useState("");
  const[phoneNumber, setPhoneNum] = useState("");
  const[emailAddress, setEmailAddress] = useState("");

  //Error Check and Validation
  const[submitted, setSubmitted] = useState(false);
  const[error, setError] = useState(false);

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

  const handleFormSubmission = (e) => {
    e.preventDefault();//remove default js
    if(firstName === '' || lastName === '' || npiNumber === '' || 
    busAddress === '' || phoneNumber === '' || emailAddress === ''){
      setError(true);
      // handleShow();
      console.log("ERROR Please fill in all registration fields");
    }
    else{
      setSubmitted(true);
      setError(false);
      console.log("SUCCESS");
    }
  };

  return (
    <div className="App">
        <h2>Availity Homework Form</h2>
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
          variant="outlined"
          helperText="e.g. name@gmail.com"
          onChange={handlePhoneNumber}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
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
    </div>
  );
}

export default App;
