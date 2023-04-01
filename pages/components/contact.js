import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [message, setMessage] = useState('');
  const SendMail = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/email', { message })
      .then((res) => {
        alert('Send Mail To You');
        setMessage('');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form>
        <input
          type="message"
          placeholder="Enter Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button onClick={SendMail}>Send</button>
      </form>
    </div>
  );
}
