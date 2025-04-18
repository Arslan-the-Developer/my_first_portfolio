import React, { useState } from 'react';

function LinkedInLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const fillColor = isHovered ? '#ffffff' : '#0d4952'; // Fiverr green on hover

  return (
    <button className='w-11 h-11 p-1 flex items-center justify-center bg-transparent border-3 font-monty font-bold border-less-primary transition-all hover:border-2 hover:border-white' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/linkedin-02-solid-standard.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color={fillColor}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5C1.5 9.22386 1.72386 9 2 9H6.5C6.77614 9 7 9.22386 7 9.5V22C7 22.2761 6.77614 22.5 6.5 22.5H2C1.72386 22.5 1.5 22.2761 1.5 22V9.5Z" fill={fillColor}></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.25C1.5 2.73122 2.73122 1.5 4.25 1.5C5.76878 1.5 7 2.73122 7 4.25C7 5.76878 5.76878 7 4.25 7C2.73122 7 1.5 5.76878 1.5 4.25Z" fill={fillColor}></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.5C9 9.22386 9.22386 9 9.5 9H14.0001C14.2762 9 14.5001 9.22386 14.5001 9.5V9.96448C15.2812 9.36032 16.2472 9.00024 17.2968 9.00024C19.8734 9.00024 22.5001 11.2013 22.5001 14.0002L22.4987 22.0001C22.4987 22.2762 22.2748 22.5 21.9987 22.5H17.5C17.2238 22.5 17 22.2761 17 22V15.7502C17 15.0599 16.4403 14.5002 15.75 14.5002C15.0597 14.5002 14.5001 15.0599 14.5001 15.7502V22C14.5001 22.2761 14.2762 22.5 14.0001 22.5H9.5C9.22386 22.5 9 22.2761 9 22V9.5Z" fill={fillColor}></path>
        </svg>
    </button>
  );
}

export default LinkedInLogo;
