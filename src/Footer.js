import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerdivision'>
      <div className='footerparent flexiblealign'>
        <div className='footer '>
          <div>
            <ul className='ownerdetails'>
              <li>contact: 8667082028 </li>
              <li>mb.maruthu2000@gmail.com</li>
            </ul>
          </div>
          <div className='slash'>
          </div>
          <div>
            <div>
              <ul className='ownerdetails'>
                <li> address: kadaiveethi senthanadu,ulundurpet
                      kallakurichi distict</li>
                <li> order No: 8667082028</li>
              </ul>
            </div>
            <ul className='footernavigations'>
              <li><a target='_blank' href='https://www.linkedin.com'><BsLinkedin/></a></li>                  
              <li><a href='https://www.instagram.com' target='_blank'><FaSquareInstagram/></a></li>         
              <li><a href='https://www.facebook.com' target='_blank'><FaFacebookSquare /></a></li>
              <li><a href='https://www.google.com' target='_blank'><FaGoogle/></a></li>
            </ul>                                       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
