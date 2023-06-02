import './App.css';
import React, { useState } from 'react';
import {MeetingForm , MeetingForm2} from './components/MeetingForm';
import axios from 'axios'

function App() {

  const [meetingLink, setMeetingLink] = useState('');
  const [meetingLink2, setMeetingLink2] = useState('');
  const [hostEmail, setHostEmail] = useState('');
  const [coHostEmail, setCoHostEmail] = useState('');


  const createMeeting = async () => {
    try {
      const response = await axios.post('http://localhost:8000/create/meeting');
      const { join_url } = response.data;
      setMeetingLink(join_url);
    } catch (error) {
      console.error(error);
    }
  };

  const createMeeting2 = async () => {
    console.log(hostEmail ,'and', coHostEmail);
    try {
      const response = await axios.post('http://localhost:8000/create/meeting/host',{
        hostEmail,
        coHostEmail,
      });
      const { join_url } = response.data;
      setMeetingLink2(join_url);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='App'>
    <h1>Create Zoom Meeting Link</h1>
    <MeetingForm onCreateMeeting={createMeeting} />
    {meetingLink && (
      <div>
        <h2>Meeting Link:</h2>
        <a href={meetingLink} target="_blank" rel="noreferrer">
          {meetingLink}
        </a>
      </div>
    )}
<br></br>

<div>
        <label>Host Email:</label>
        <input
          type='email'
          value={hostEmail}
          placeholder='Email'
          onChange={(e) => setHostEmail(e.target.value)}
        />
      </div>
      <div>
        <label>co-Host Email:</label>
        <input
          type='email'
          value={coHostEmail}
          placeholder='Email'
          onChange={(e) => setCoHostEmail(e.target.value)}
        />
      </div>
      

    <MeetingForm2 onCreateMeeting2={createMeeting2} />
    {meetingLink2 && (
      <div>
        <h2>Meeting Link of Assigned Hosts:</h2>
        <a href={meetingLink2} target="_blank" rel="noreferrer">
          {meetingLink2}
        </a>
      </div>
    )}
  </div>
  );
}

export default App;
