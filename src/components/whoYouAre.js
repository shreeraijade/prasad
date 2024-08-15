import React from 'react';
import './whoYouAre.css';

function WhoYouAre() {
  return (
    <div className='whoYouAre'>
      <span className='wlabel'>Who are you?</span>
      <div className='centdiv'>
        <div className='creatordiv'>
          <div className='card'>
            <span>Creator</span>

          </div>

        </div>
        <div className='companydiv'>
          <div className='card'>
            <span>Company</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhoYouAre;
