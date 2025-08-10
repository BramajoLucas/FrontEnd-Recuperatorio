import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';
/* import "./ContactScreen.css" */


const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className="whatsapp-sidebar">
            <div className="whatsapp-sidebar-header">
                <span style={{ fontWeight: 600, fontSize: 20 }}>Chatea con Gumball y sus amigos</span>
            </div>
            <div className="whatsapp-chats-list">
                <ContactList contacts={contactsState} />
            </div>
        </div>
    );
};

export default ContactScreen;

