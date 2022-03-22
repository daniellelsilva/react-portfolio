import React from "react";
import { Icon } from '@iconify/react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
    <footer className="footer">
      <Icon icon="ic:baseline-email" />
      <p className="footer-text">danielle.luisasilva@gmail.com</p>
    </footer>
    )
  }
}

export default Footer