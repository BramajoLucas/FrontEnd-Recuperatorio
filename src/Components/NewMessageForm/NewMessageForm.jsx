import React from 'react'
import "./NewMessageForm.css"

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} style={{ display: 'flex', flex: 1 }}>
            <input
                className="whatsapp-input"
                type="text"
                placeholder="Escribe un mensaje..."
                id="message"
                name="message"
                required
                autoComplete="off"
            />
            <button className="whatsapp-send-btn" type="submit" title="Enviar">
                <span role="img" aria-label="Enviar">➤</span>
            </button>
        </form>
    )
}

export {NewMessageForm}