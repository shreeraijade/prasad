// src/components/Job.js
import React from 'react';
import './Job.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
function Job() {
  const categories = [
    { name: 'Design, Art & Multimedia', positions: 198 },
    { name: 'Education Training', positions: 198 },
    { name: 'Accounting / Finance', positions: 198 },
    { name: 'Human Resource', positions: 198 },
    { name: 'Telecommunications', positions: 198 },
    { name: 'Restaurant / Food Service', positions: 198 },
    { name: 'Construction / Facilities', positions: 198 },
    { name: 'Health', positions: 198 },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "none",
    borderRadius: 5,
  };

  return (
    <>
    <div>
    
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Send Application
          </Typography>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <Button variant="contained" className='buttt'>Submit</Button>
        </Box>
      </Fade>
    </Modal>
  </div>




    <div className="Job">
      <header className="Job-header">
        <div className='dark'>
        <h1>The Easiest Way to Reach Out Companies</h1>
        <p>Find Jobs, Employment & Career Opportunities</p>
        <div className="SearchBar">
          <input type="text" placeholder="Job Title, Keywords Or Company Name" />
          <button>Search</button>
        </div>
        </div>
        
      </header>
      <main>
        <h2>Open Positions</h2>
        <div className="CategoryList">
          {categories.map((category, index) => (
            <div key={index} className="CategoryItem" onClick={handleOpen}>
              <h3>{category.name}</h3>
              <p>{category.positions} Open Positions</p>
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}

export default Job;