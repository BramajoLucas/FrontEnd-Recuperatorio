import React from "react"
import Message from "../Message/Message"
/* import "./MessagesList.css" */

const MessagesList = ({ messages, deleteMessageById }) => {

	if (messages.length === 0) {
		return (
			<div className="whatsapp-no-messages">
				<span>Aun no tienes mensajes!</span>
			</div>
		);
	}
	
	const lista_mensajes = messages.map(
		function (message) {
			return <Message 
				key={message.id}
				emisor={message.emisor} 
				hora={message.hora} 
				id={message.id} 
				texto={message.texto} 
				status={message.status}
				deleteMessageById={deleteMessageById}
			/>
		}
	)
	
	return (
		<>
			{lista_mensajes}
		</>
	)
}
export default MessagesList