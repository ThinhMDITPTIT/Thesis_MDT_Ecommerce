import React from 'react';
import playStore from '../../../assets/playstore.png';
// import appStore from '../../../assets/Appstore.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <img src={playStore} alt='playstore' />
        {/* <img src={appStore} alt='Appstore' /> */}
      </div>

      <div className='midFooter'>
        <h1>ECOMMERCE.</h1>

        <p>Thesis 2021 &copy; MDT - PTIT</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Me</h4>
        <a href='https://www.instagram.com/thinh_me/'>Instagram</a>
        <a href='https://www.facebook.com/MeDucThinh'>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
