import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:8989");

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messageReceive, setMessageReceive] = useState([]);

    const handleTextChanges = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmitChat = (e) => {
        e.preventDefault();

        if(!message || message === "") return;

        console.info("Submitted chat");
        console.info("messages submit", message);

        socket.emit('send_message', message);
        // setMessages([...messages, message]);
    }

    useEffect(() => {
        socket.on('incoming_message', (message) => {
            setMessageReceive([...messageReceive, message]);
        });
        console.info(messageReceive);
    }, [socket]);

    return(
        <>
          <div className='app-msg'>
              {messageReceive.map((result, index) => {
                  return <p key={index}>{result}</p>
              })}
          </div>
          <div className='form'>
              <form className='app-control' onSubmit={handleSubmitChat}>
                  <input type='text'
                  placeholder="Enter text"
                  onChange={(event) => handleTextChanges(event)} />

                  <input type='submit' value='Send' />
              </form>
          </div>
        </>
    );
}

export default Chat;