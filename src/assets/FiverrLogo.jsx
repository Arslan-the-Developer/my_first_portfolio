import React, { useState } from 'react';

function FiverrLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const fillColor = isHovered ? '#ffffff' : '#0d4952'; // Fiverr green on hover

  return (
    <button className='w-11 h-11 p-1 flex items-center justify-center bg-transparent border-3 font-monty font-bold border-less-primary transition-all hover:border-2 hover:border-white' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        style={{ transition: 'fill 0.3s ease' }}
        >
        <g
          fill={fillColor}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: 'normal' }}
          >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.68,0 -23,10.32 -23,23c0,12.68 10.32,23 23,23c12.68,0 23,-10.32 23,-23c0,-12.68 -10.32,-23 -23,-23zM34,36h-6v-11h-4v11h-6v-11h-4v-6h4.04c0.37,-4.96 3.54,-8 8.46,-8h2.53v6h-2.53c-0.92,0 -2.14,0 -2.43,2h9.93z" />
          </g>
        </g>
      </svg>
    </button>
  );
}

export default FiverrLogo;
