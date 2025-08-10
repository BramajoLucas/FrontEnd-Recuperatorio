
import React from 'react';
import ChatScreen from './Screens/ChatScreen/ChatScreen';
import { Route, Routes } from 'react-router';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import './whatsapp.css';

const App = () => {

	return (
		<div className="whatsapp-app">
			<div className="whatsapp-container">
				<Routes>
					   <Route path='/' element={<>
						   <ContactScreen />
						<div className="whatsapp-main whatsapp-main-empty hide-on-mobile">
						   <div className="whatsapp-empty-chat-message">
							   Seleccioná un chat para comenzar a chatear
						   </div>
						</div>
					   </>} />
					   <Route path='/contact/:contact_id/messages' element={<ChatScreen />} />
				</Routes>
			</div>
		</div>
	);
}






export default App

