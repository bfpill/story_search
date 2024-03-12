import React from 'react';
import MyLogo from '../assets/logo.svg';

export function LogoSVG({ theme }) {
  return (
    <img src={MyLogo} alt="My Logo" height="50px" width="50px" />
  );
}