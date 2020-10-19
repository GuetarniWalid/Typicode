import React from 'react';

export default function Button({ children, handleClick, color , margin, id}) {


  return <button className={`btn ${color} ${margin}`} id={id} onClick={handleClick}>{children}</button>;
}
