import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import MessagesList from '../../Components/MessagesList/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import "./ChatScreen.css"


const ChatScreen = () => {
	const { contact_id } = useParams();
	const contact_selected = getContactById(contact_id);
	const [messages, setMessages] = useState(contact_selected.messages);
	const navigate = useNavigate();

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {
		
		const new_mesage = {
			emisor: 'YO',
			hora: '11:10',
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

	const deleteAllMessages = () => {
		setMessages([])
	}

	

	return (
		<div className="whatsapp-main">
					<div className="whatsapp-main-header">
						<button
							className="back-arrow-btn"
							onClick={() => navigate(-1)}
							aria-label="Volver"
						>
							<span className='back-arrow-icon'>⬅</span>
						</button>
						<img
							className="chat-header-avatar"
							src={contact_selected.avatar}
							alt={contact_selected.name}
						/>
						<div className="chat-header-info">
							<span className="chat-header-name">{contact_selected.name}</span>
							<span className="chat-header-last-connection">Última conexión: {contact_selected.lastConnection}</span>
						</div>
					</div>
			<div className="whatsapp-messages-list">
				<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
			</div>
			<div className="whatsapp-input-area">
				<NewMessageForm addNewMessage={addNewMessage} />
				{messages.length > 0 && (
					<button className="whatsapp-send-btn delete-all-btn" onClick={deleteAllMessages} title="Borrar todos los mensajes">
						🗑️
					</button>
				)}
			</div>
		</div>
	);
}



export default ChatScreen