import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>{props.headertext}</h1>
      </header>
    </div>
  );
}

export default Header;
