import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, callback, cancel }) => {
  return (
    <React.Fragment>
      <div>
        {message}
        <button type="button" onClick={cancel}>cancela</button>
        <button type="button" onClick={callback}> confirma </button>
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
