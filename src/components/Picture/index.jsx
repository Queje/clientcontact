import React from 'react';

const Picture = () => {
    let random = Math.random();
    if (random < 0.5) {
      return (
        <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} alt="Client fake profile pic" />
      );
    } else {
      return (
        <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`} alt="Client fake profile pic" />
      );
    };
  };
  
  export default Picture;