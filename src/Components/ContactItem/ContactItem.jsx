import React from 'react';
import { Link } from 'react-router';
import "./ContactItem.css"


const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div className="whatsapp-chat-avatar">
                <img src={contact.avatar} alt={contact.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className="whatsapp-chat-info">
                <div className="whatsapp-chat-title">{contact.name}</div>
                <div className="whatsapp-chat-lastmsg">Última conexión: {contact.lastConnection}</div>
            </div>
        </Link>
    );
};

export default ContactItem;