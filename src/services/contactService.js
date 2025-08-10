import React from "react";

const contacts = [
    {
        id: 1,
        name: 'Gumball',
        description: '¡Devuelvan el mundo, devuélvanlo ya!',
        avatar: 'https://m.media-amazon.com/images/S/pv-target-images/5046233257d33805ad4014c4c6f805c9c612f6397153d8efef64887f4ccf345d.jpg',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola, estoy hablando con Gumball',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'exactamente',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'QUE DIVERTIDO',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Darwin',
        description: '¡Tío, no soy tu papá!',
        avatar: 'https://cdn.hanna-barberawiki.com/8/8c/Darwin_Watterson.png',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '14:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '14:11',
                id: 2,
                texto: 'Hola amigoo, en que puedo ayudartee?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '14:12',
                id: 3,
                texto: 'Nada amigo, queria saber como andabas',
                status: 'visto'
            },
        ]
    },
        {
        id: 3,
        name: 'Anais',
        description: 'Soy la hija preferida',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXAyS3mH4N8Hma8cDA1sXOFB3qbcVZLWPhdU_mzZ9Xgho-NGfcGa0szcDo7-Vyi_5BJU&usqp=CAU',
        lastConnection: '18:34',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola Anaiss',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Holaa, todo bieen?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Sii, todo tranqui, o no que vos sos la hija preferida?',
                status: 'visto'
            },
            {

                emisor: 'OTRO',
                hora: '23:13',
                id: 2,
                texto: 'SII, LO SOYYY',
                status: 'visto'
            }
        ]
    }

];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}