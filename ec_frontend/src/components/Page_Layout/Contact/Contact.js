import React from 'react';
import './Contact.css';
import { Button } from '@material-ui/core';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <a className='mailBtn' href='mailto:mdt.thesis.ec@gmail.com'>
        <Button>Contact: MDT.Thesis.Ec@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
