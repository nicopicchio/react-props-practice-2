import { useState } from 'react';
import AddMessage from './AddMessage';
import Message from './Message';

let id = 6;

const intialMessages = [
	{ id: 1, text: 'Hello!', user: 'Nicolas' },
	{ id: 2, text: 'Hey!', user: 'Sergio' },
	{ id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
	{ id: 4, text: 'Hot hot, you?', user: 'Sergio' },
	{ id: 5, text: 'Cool cool!', user: 'Nicolas' },
];

function Chat() {
	const [messages, setMessages] = useState(intialMessages);

	const addMessage = (text) => {
		setMessages([...messages, { id: id++, text, user: 'Nicolas' }]);
	};

	return (
		<div className="chat">
			<ul>
				{messages.map((message, index) => (
					<Message key={index} message={message} />
				))}
			</ul>
      <AddMessage addMessage={addMessage}/>
			
		</div>
	);
}

export default Chat;
