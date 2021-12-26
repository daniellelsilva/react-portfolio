import React, { Component } from 'react';
import image from '../assets/IMG_20201009_152848.jpg'
import './about.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <img src={image} alt="profile" />
        <p>teste</p>
      </div>
    )
  }
}
