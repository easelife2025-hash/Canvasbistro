import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic Official WhatsApp Icon
 * Matches the official WhatsApp emblem: green circular/bubble silhouette with white phone receiver handset
 */
export function RealWhatsAppIcon({ className = 'w-5 h-5', size }: IconProps) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.67 19.74L5.5 16.7L5.31 16.39C4.54 15.17 4.14 13.76 4.14 11.91C4.14 7.37 7.84 3.67 12.04 3.67ZM8.73 7.39C8.54 7.39 8.24 7.46 7.98 7.74C7.73 8.02 7.02 8.68 7.02 10.02C7.02 11.36 8 12.65 8.14 12.83C8.28 13.01 10.04 15.74 12.75 16.91C13.39 17.19 13.9 17.36 14.29 17.48C14.94 17.69 15.54 17.66 16.01 17.59C16.53 17.51 17.62 16.93 17.85 16.29C18.08 15.65 18.08 15.1 18.01 14.99C17.94 14.88 17.76 14.81 17.48 14.67C17.2 14.53 15.84 13.86 15.59 13.77C15.34 13.68 15.15 13.63 14.97 13.91C14.78 14.19 14.26 14.81 14.1 14.99C13.94 15.17 13.78 15.2 13.5 15.06C13.22 14.92 12.33 14.63 11.27 13.69C10.45 12.95 9.89 12.05 9.75 11.81C9.61 11.57 9.73 11.43 9.87 11.29C10 11.16 10.15 10.96 10.29 10.8C10.43 10.64 10.48 10.52 10.57 10.34C10.66 10.16 10.62 10 10.55 9.86C10.48 9.72 9.92 8.35 9.69 7.79C9.46 7.24 9.23 7.32 9.06 7.31C8.9 7.31 8.73 7.39 8.73 7.39Z" />
    </svg>
  );
}

/**
 * Authentic Realistic Telephone Handset Icon
 * Classic telephone handset receiver silhouette
 */
export function RealPhoneIcon({ className = 'w-5 h-5', size }: IconProps) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
    </svg>
  );
}
