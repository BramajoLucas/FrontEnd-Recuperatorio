import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
/* import "./ContactList.css" */

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div className="whatsapp-chat-item" key={contact.id}>
          <ContactItem contact={contact} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;