import React, { useState } from "react";
import classes from "./UserForm.module.scss";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import ErrorModal from "../UI/ErrorModal";


const UserForm = (props) => {
  const [error, setError] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredContact, setEnteredContact] = useState('')
  const [enteredCountry, setEnteredCountry] = useState('')
  const [enteredState, setEnteredState] = useState('')
  const [enteredCity, setEnteredCity] = useState('')

  const usernameChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }
  const EmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }
  const contactChangeHandler = (e) => {
    setEnteredContact(e.target.value)
  }
  const countryChangeHandler = (e) => {
    setEnteredCountry(e.target.value)
  }
  const stateChangeHandler = (e) => {
    setEnteredState(e.target.value)
  }
  const cityChangeHandler = (e) => {
    setEnteredCity(e.target.value)
  }
  
  const submitFormHandler = (e) => {
    e.preventDefault();
    if(enteredState.trim().length === 0 || enteredCountry.trim().length === 0 || enteredCity.trim().length === 0){
      console.log("Invalid!");
      setError({
        title: "An Error Occured!",
        message: "State, Country and City are mandatory. Please fill it!"
      });
      return;
    }
    const userData = {
      id: Math.random(),
      userName: enteredName,
      email: enteredEmail,
      contact: enteredContact,
      country: enteredCountry,
      state: enteredState,
      city: enteredCity
    }
    props.onSaveUserData(userData);
    console.log(userData);
    setEnteredName('')
    setEnteredEmail('')
    setEnteredContact('')
    setEnteredCountry('')
    setEnteredState('')
    setEnteredCity('')
  }

  const modalCloseHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClickModal={modalCloseHandler}/>}
    <div className={classes.user_form}>
      <form onSubmit={submitFormHandler} className={classes.form}>
          <TextField fullWidth onChange={usernameChangeHandler} value={enteredName} label="Enter Your Name" id="fullWidth"  type="text"/>
          <TextField fullWidth onChange={EmailChangeHandler} value={enteredEmail} label="Enter Your Email" id="fullWidth" type="text"/>
          <TextField fullWidth onChange={contactChangeHandler} value={enteredContact} label="Enter Your Contact Number" id="fullWidth" type='number'/>
        <div className={classes.form_place}>
          <TextField onChange={countryChangeHandler} value={enteredCountry} id="standard-basic" label="Country*" variant="standard" />
          <TextField onChange={stateChangeHandler} value={enteredState} id="standard-basic" label="State*" variant="standard" />
          <TextField onChange={cityChangeHandler} value={enteredCity} id="standard-basic" label="City*" variant="standard" />
        </div>
        <Button type="sumbit" variant="contained">Submit</Button>
      </form>
    </div>
    </div>
  );
};

export default UserForm;
