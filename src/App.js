import './App.css';
import Username from './components/Username';
import Emailpass from './components/emailpass';
import Login from './components/login';
import { Navbar } from './components/navbar.js';
import Home from './pages/Home';
import Footer from './components/footer';
import WhoYouAre from './components/whoYouAre.js';
import CreatorForm from './components/CreatorForm.js';
import CompanyForm from './components/CompanyForm.js';
import Profile from './pages/profile.js';
import Job from './pages/job.js';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/contextApi.js';

function App() {

  const user = {
    username: 'Camila Smith',
    email: 'devjoy@theEmail.com',
    role: 'UI Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    profileImage: "https://writedirection.com/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png"  // Update this to the correct path
  };
  

  return (
    <>
      {/* <Emailpass/> */}
      {/* <Login/> */}
      <AuthProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/username' element={<Username />} />
          <Route path='/email-password' element={<Emailpass />} />
          <Route path='/login' element={<Login />} />
          <Route path='/role' element={<WhoYouAre />} />
          <Route path='/role/creator' element={<CreatorForm />} />
          <Route path='/role/company' element={<CompanyForm />} />
          <Route path='/' element={<Home />} />
         
          <Route path='/profile' 
          element={
            <AuthContext.Consumer>
                {({isLoggedIn})=>isLoggedIn?<Profile user={user}/>:<Navigate to="/login"/>}
            </AuthContext.Consumer>
            }/>
          <Route path='/jobs' element={
            <AuthContext.Consumer>
              {({isLoggedIn})=>isLoggedIn?<Job/>: <Navigate to="/login"/>}
            </AuthContext.Consumer>
          }/>
        </Routes>
      </Router>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
