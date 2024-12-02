import React, { useContext } from 'react';
import NotificationList from './NotificationList';
import ActivityList from './ActivityList';
import ContactList from './ContactList';
import { ToggleRightContext } from '../ToggleContext/ToggleRightContext';
import "../../App.css";
const RightPanel = () => {

  const { toggleRight } = useContext(ToggleRightContext); // Accessing ToggleContext here
  
  return (
    <>
       { toggleRight && (
          <div className='right-panel'>
          <NotificationList />
          <ActivityList />
          <ContactList />
        </div>

       )}
        
      
    </>
  );
};

export default RightPanel;
