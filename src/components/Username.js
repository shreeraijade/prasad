

import "./Username.css"


const Username = () => {

  return (
    <>
     <div class="container">
        <div class="inner-container">
            <label for="inputField" className=".rubik-shree">Enter Your Name</label>
            <input type="text" id="inputField"/>
            <a href="/email-password"><button class="circular-button">Next</button></a>
            <span className='bottom'>Already have an Account?<a href="/login"> SignIn</a></span>
        </div>
        
    </div>
    </>
  );
};

export default Username;



