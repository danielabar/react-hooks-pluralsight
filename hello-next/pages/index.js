import React, { useState } from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      You typed: {inputText}
      <br />
      <h3>Change History</h3>
      <ul>
        {historyList.map(rec => {
          return <li>{rec}</li>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
