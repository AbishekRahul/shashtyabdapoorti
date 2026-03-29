import React from 'react';

export const GaneshaMotif = ({ className = "w-16 h-16 text-temple-primary" }) => (
  // An elegant line-art representation of Lord Ganesha
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Trunk & Face */}
    <path d="M50 30 C50 30, 60 50, 45 70 C35 85, 55 95, 65 80" />
    <path d="M48 30 C30 30, 30 50, 50 50" />
    {/* Ears */}
    <path d="M38 35 C20 20, 10 50, 35 48" />
    <path d="M62 35 C80 20, 90 50, 65 48" />
    {/* Crown/Trishul Top */}
    <path d="M40 25 L50 10 L60 25 Z" />
    <circle cx="50" cy="8" r="3" />
    {/* Eyes */}
    <path d="M40 40 Q43 42 45 40" />
    <path d="M55 40 Q57 42 60 40" />
    {/* Tusk */}
    <path d="M42 55 L38 60 L44 60" />
    {/* Modak */}
    <circle cx="25" cy="70" r="5" />
    <path d="M45 70 C35 75, 25 70, 25 70" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const KalashMotif = ({ className = "w-12 h-12 text-temple-secondary" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Base Pot */}
    <path d="M30 60 C30 85, 70 85, 70 60 C70 45, 60 35, 50 35 C40 35, 30 45, 30 60 Z" />
    {/* Neck of Pot */}
    <rect x="42" y="30" width="16" height="5" />
    {/* Mango Leaves */}
    <path d="M42 30 C30 20, 20 25, 35 35" fill="green" />
    <path d="M58 30 C70 20, 80 25, 65 35" fill="green" />
    <path d="M45 28 C40 15, 30 10, 42 22" fill="green" />
    <path d="M55 28 C60 15, 70 10, 58 22" fill="green" />
    {/* Coconut */}
    <circle cx="50" cy="20" r="10" fill="#8B4513" />
    {/* Coconut details */}
    <circle cx="47" cy="18" r="1" fill="#fff" />
    <circle cx="53" cy="18" r="1" fill="#fff" />
    <circle cx="50" cy="23" r="1" fill="#fff" />
    {/* Thread around pot */}
    <path d="M33 55 Q50 65 67 55" stroke="#FFD700" strokeWidth="2" fill="none" />
    <path d="M31 65 Q50 75 69 65" stroke="#FFD700" strokeWidth="2" fill="none" />
  </svg>
);

export const MangoLeafToran = ({ className = "w-full h-8 text-green-700" }) => (
  <svg viewBox="0 0 200 20" preserveAspectRatio="none" className={className}>
    {/* Repeating mango leaf pattern across the top border */}
    <pattern id="toran" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      {/* Leaf shape */}
      <path d="M10 0 C15 5, 20 15, 10 20 C0 15, 5 5, 10 0" fill="currentColor" />
      {/* Marigold Flower dot */}
      <circle cx="10" cy="2" r="3" fill="#FF8C00" />
    </pattern>
    <rect x="0" y="0" width="100%" height="20" fill="url(#toran)" />
    {/* Gold string */}
    <path d="M0 2 Q100 4 200 2" stroke="#FFD700" strokeWidth="1" fill="none" />
  </svg>
);

export const KanchiBorder = ({ className = "w-full h-4 text-temple-secondary opacity-80" }) => (
  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className={className}>
    <pattern id="kanchi-weave" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="10" height="10" fill="transparent" />
      <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
      <circle cx="5" cy="5" r="1" fill="#800000" />
    </pattern>
    <rect x="0" y="0" width="100%" height="10" fill="url(#kanchi-weave)" />
    {/* Border lines */}
    <rect x="0" y="0" width="100%" height="1" fill="currentColor" />
    <rect x="0" y="9" width="100%" height="1" fill="currentColor" />
  </svg>
);
