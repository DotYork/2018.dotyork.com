import React from 'react';
import Speakers from '../../data/speakers';

const SpeakerDetail = (props) => {

  let speakerdetail = Speakers 
                  .filter(speaker => speaker.id === `${props.id}`)
                  .map((speaker) => {
    return (
      <p>Something needs to go here now</p>
    )
  }); 

  return (
    <div className="p-speaker__body">
        {speakerdetail}
    </div>
  )
}

export default SpeakerDetail