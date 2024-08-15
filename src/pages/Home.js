import React from 'react';
import './Home.css';

function Home() {
  return (
    <>          
      <div className='home'>
        <section className='creator'>
          <div className='content'>
            <span>Creator</span>
            <p>Learn about the creators behind this project.</p>
          </div>
        </section>
        <section className='company'>
          <div className='content'>
            <span>Company</span>
            <p>Discover the company’s mission and values.</p>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
