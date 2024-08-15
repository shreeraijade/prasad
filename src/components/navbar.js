import React, { useState } from 'react';
import { AuthContext } from '../context/contextApi.js';
import { useContext } from 'react';
import "./navbar.css";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const guestLinks = (
    <>
      <a href='/login'>SignIn</a>
      <a href='/username'>SignUp</a>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button></button>
      </div>
    </>
  );

  const userLinks = (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button></button>
      </div>
      <div className="profile">
        Account
        <div className="dropdown">
          <a href="/profile">Profile</a>
          <a href="/message">Messages</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </>
  );

  return (
    <div className="navbar">
      <a href='/' className='logoa'>
        <div className="logo">Creatorship.org</div>
      </a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/jobs">Jobs</a>
        {isLoggedIn ? userLinks : guestLinks}
      </div>
    </div>
  );
}

export { Navbar };
