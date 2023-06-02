import React from 'react'

export const MeetingForm = ({ onCreateMeeting }) => {
  return (
    <div>
       <button onClick={onCreateMeeting}>Create Meeting</button>
       
    </div>
    
  )
}
export const MeetingForm2 = ({ onCreateMeeting2 }) => {
    return (
      <div>
        <br></br>
         <button onClick={onCreateMeeting2}>Create Meeting - Host</button>
      </div>
    )
  }

