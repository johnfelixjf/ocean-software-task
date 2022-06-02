import React from "react";
import classes from "./ErrorModal.module.scss";
import Button from "@mui/material/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClickModal}></div>
      <div className={classes.error_modal}>
        <header className={classes.modal_header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.modal_message}>
          <p>{props.message}</p>
          <div className={classes.modal_button}>
            <Button variant="outlined" onClick={props.onClickModal}>
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
