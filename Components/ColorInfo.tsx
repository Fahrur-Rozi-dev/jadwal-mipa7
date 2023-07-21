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
    width: '20px',
    height: '20px',
    borderRadius: '50%', // Mengatur bentuk lingkaran
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

