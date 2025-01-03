import React from 'react';
import './message.css';

const Message = (props) => {
  const messageLines = props.message.split('\n').map((line, index) => <div key={index}>{line}</div>);
  console.log(messageLines);
  
  return <div className='message'>{messageLines}</div>;
};

export default Message;
