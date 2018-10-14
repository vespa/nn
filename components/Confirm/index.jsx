import React from 'react';

const Message = ({ message, callback, cancel }) => {
  return (
    <div>
      {message}
      <button type="button" onClick={cancel}>cancela</button>
      <button type="button" onClick={callback}> confirma </button>
    </div>
  );
};

export default Message;
