import React, { useState } from 'react';

function InstagramLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const fillColor = isHovered ? '#ffffff' : '#0d4952'; // Fiverr green on hover

  return (
    <button className='w-11 h-11 p-1 flex items-center justify-center bg-transparent border-3 font-monty font-bold border-less-primary transition-all hover:border-2 hover:border-white' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/instagram-solid-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color={fillColor}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75H11.9428H12.0572ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM17.5123 7.5C18.0621 7.5 18.5078 7.05229 18.5078 6.5C18.5078 5.94772 18.0621 5.5 17.5123 5.5H17.5033C16.9535 5.5 16.5078 5.94772 16.5078 6.5C16.5078 7.05228 16.9535 7.5 17.5033 7.5H17.5123Z" fill={fillColor}></path>
      </svg>
    </button>
  );
}

export default InstagramLogo;
