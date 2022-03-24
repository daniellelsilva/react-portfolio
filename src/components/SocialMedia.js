import React from 'react';
import { Icon } from '@iconify/react';

export default function SocialMedia() {
  return (
    <section className="home-links">
      <a href="https://www.linkedin.com/in/danielle-lsilva/" target="_blank" rel="noopener noreferrer">
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a href="https://github.com/daniellelsilva" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:github" />
      </a>
      <a href="https://www.instagram.com/ls_danielle/" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:instagram" />
      </a>
    </section>
  )
}
