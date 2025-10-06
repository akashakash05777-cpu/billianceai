import React from 'react';

interface VEducateLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const VEducateLogo: React.FC<VEducateLogoProps> = ({ className = '', size = 32, showText = false }) => {
  if (showText) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <svg
          width={size * 2}
          height={size}
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* V - Left part */}
          <path
            d="M10 10 L35 70 L48 70 L73 10 L58 10 L41.5 52 L25 10 Z"
            fill="#1e4a7a"
          />
          
          {/* Diagonal separator */}
          <path
            d="M75 15 L85 70"
            stroke="#1e4a7a"
            strokeWidth="8"
            strokeLinecap="round"
          />
          
          {/* E - Top bar */}
          <rect
            x="90"
            y="10"
            width="100"
            height="12"
            fill="#1e4a7a"
          />
          
          {/* E - Middle bar */}
          <rect
            x="90"
            y="34"
            width="75"
            height="12"
            fill="#1e4a7a"
          />
          
          {/* E - Bottom bar */}
          <rect
            x="90"
            y="58"
            width="100"
            height="12"
            fill="#1e4a7a"
          />
        </svg>
        
        <div className="mt-2 text-center">
          <div className="text-lg font-bold tracking-wide" style={{ color: '#1e4a7a' }}>
            VEducate
          </div>
          <div className="text-xs tracking-widest text-gray-500 uppercase">
            Vision · Innovation · Success
          </div>
        </div>
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* V - Left part */}
      <path
        d="M5 15 L25 75 L35 75 L55 15 L45 15 L30 55 L15 15 Z"
        fill="#1e4a7a"
      />
      
      {/* Diagonal separator */}
      <path
        d="M58 20 L65 75"
        stroke="#1e4a7a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* E - Top bar */}
      <rect
        x="70"
        y="15"
        width="25"
        height="8"
        fill="#1e4a7a"
      />
      
      {/* E - Middle bar */}
      <rect
        x="70"
        y="41"
        width="20"
        height="8"
        fill="#1e4a7a"
      />
      
      {/* E - Bottom bar */}
      <rect
        x="70"
        y="67"
        width="25"
        height="8"
        fill="#1e4a7a"
      />
    </svg>
  );
};

export default VEducateLogo;

