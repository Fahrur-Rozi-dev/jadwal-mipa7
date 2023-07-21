'use client'

// ColorInfo.tsx

import React from 'react';

interface ColorInfoProps {
  color: string;
  description: string;
}

const ColorInfo: React.FC<ColorInfoProps> = ({ color, description }) => {
  const colorStyle: React.CSSProperties = {
    backgroundColor: color,
    width: '50px',
    height: '50px',
    marginRight: '10px',
    display: 'inline-block',
  };

  return (
    <div>
      <div style={colorStyle}></div>
      <span>{description}</span>
    </div>
  );
};

export default ColorInfo;
