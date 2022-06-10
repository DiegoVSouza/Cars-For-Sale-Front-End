import React from 'react';
import { Container } from './styles';

import { ReactComponent as WhatsappIcon } from '../../assets/images/icons/whasappIcon.svg';
import { ReactComponent as EmailIcon } from '../../assets/images/icons/emailIcon.svg';


const Footer = (): JSX.Element => {

  
    return (
        <Container>
 
            <div>
                <section>
                <WhatsappIcon/>
                <p>dvsdiegovieira@gmail.com</p>
                </section>
                <section>
                <EmailIcon/>
                <p>88 997974229</p>
                </section>
            </div>
            <div >
                <p>Copyright ©2020 All rights reserved | This template is made with  by <a href="https://github.com/diegovsouza"> Diego </a></p>
            </div>

        </Container>
    );
  };
  
  export default Footer;