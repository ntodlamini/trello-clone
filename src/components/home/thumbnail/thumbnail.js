import React from 'react';

function Thumbnail({className,onClick,title}) {
  return (
    <div className={`thumbnail ${className?className:null}`} onClick={()=>onClick()}>
        <h4 className="title">{title}</h4>        
    </div>
  );
}

export default Thumbnail;