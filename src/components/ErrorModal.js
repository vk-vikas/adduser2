import React from "react";
import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div className="errormodal">
    <div className="errorbox">
      <header className="title">{props.title}</header>
      <div>{props.message}</div>
      <footer>
        <button 
        onClick={props.handleError}
        className="action">
            ok
        </button>
      </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
