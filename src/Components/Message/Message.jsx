import React, { useState } from 'react'
import './Message.css'
const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	// Determinar si el mensaje es enviado o recibido
	const isSent = emisor === 'YO';
	return (
		<div
			className={`whatsapp-message ${isSent ? 'sent' : 'received'}`}
			onContextMenu={handleChangeMessageSelected}
		>
			<span>{texto}</span>
			<span className="whatsapp-message-time">{hora}</span>
						{message_selected && (
							<button title='Borrar mensaje' className="delete-message-btn" onClick={() => { deleteMessageById(id); }}>
								🗑️
							</button>
						)}
		</div>
	);
}
export default Message