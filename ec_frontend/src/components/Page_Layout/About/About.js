import React from 'react';
import './About.css';
import { Button, Typography, Avatar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const About = () => {
  const visitInstagram = () => {
    window.location = 'https://www.instagram.com/thinh_me/';
  };
  return (
    <div className='aboutSection'>
      <div></div>
      <div className='aboutSectionGradient'></div>
      <div className='aboutSectionContainer'>
        <Typography component='h1'>About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/91487895_1595682847263246_297667261114613760_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JM0FQ2t2218AX8PiHcC&_nc_ht=scontent.fhan2-1.fna&oh=7055eab57199d0398f7ba3f5dec7c743&oe=6185C079'
              alt='Founder'
            />
            <Typography>Thinh Me</Typography>
            <Button onClick={visitInstagram} color='primary'>
              Visit Instagram
            </Button>
          </div>
          <div className='aboutSectionContainer2'>
            <Typography component='h2'>My Brands</Typography>
            <a href='https://www.instagram.com/thinh_me/' target='blank'>
              <FacebookIcon className='facebookSvgIcon' />
            </a>

            <a href='https://www.instagram.com/thinh_me/' target='blank'>
              <InstagramIcon className='instagramSvgIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
