import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

const Message = ({ message, callback, cancel }) => {
  return (
    <React.Fragment>
      <div className={classes.message__blackbox} onClick={cancel} role="presentation" />
      <div className={classes.message}>
        <div className={classes.message__text}>
          {message}
        </div>
        <button type="button" onClick={cancel} className="btn btn--white right">cancela</button>
        <button type="button" onClick={callback} className="btn btn--white right"> confirma </button>
      </div>
    </React.Fragment>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default Message;
