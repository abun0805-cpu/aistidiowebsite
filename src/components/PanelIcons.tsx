import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z" />
  </svg>
);

export const AppleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 170 170"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.94-12.04-14.58-6.19-9.5-11.04-20.73-14.55-33.69-3.51-12.96-5.27-24.87-5.27-35.73 0-15.02 3.86-27.42 11.58-37.21 7.72-9.79 17.5-14.77 29.34-14.94 4.35 0 9.27 1.13 14.75 3.39 5.48 2.26 9.38 3.44 11.69 3.55 2.11-.11 6.13-1.32 12.07-3.62 5.94-2.31 10.96-3.34 15.07-3.1 11.33.56 20.61 4.54 27.84 11.95-9.98 6.04-14.86 14.5-14.65 25.38.21 8.42 3.41 15.65 9.61 21.68 6.2 6.03 13.58 9.53 22.14 10.5-2.22 6.77-4.8 13.04-7.75 18.8zM119.22 33.72c0-5.83 2.14-11.58 6.42-17.26 4.28-5.68 9.77-9.87 16.48-12.56.22 1.34.33 2.68.33 4.02 0 5.83-2.26 11.75-6.78 17.76-4.52 6.01-10.15 10.02-16.9 12.03-.45-1.34-.68-2.67-.68-3.99z" />
  </svg>
);

export const PanelBadgeIcon: React.FC<{
  type: 'mobile' | 'pc' | 'ios';
  color: 'cyan' | 'green' | 'blue';
}> = ({ type, color }) => {
  const borderColors = {
    cyan: 'border-cyan-400/70 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]',
    green: 'border-emerald-400/70 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.4)]',
    blue: 'border-sky-400/70 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.4)]',
  };

  return (
    <div
      className={`w-14 h-14 rotate-45 border bg-[#081022]/90 flex items-center justify-center transition-transform hover:scale-105 ${borderColors[color]}`}
    >
      <div className="-rotate-45">
        {type === 'mobile' && <Smartphone className="w-6 h-6 stroke-[1.75]" />}
        {type === 'pc' && <Monitor className="w-6 h-6 stroke-[1.75]" />}
        {type === 'ios' && <AppleIcon className="w-6 h-6" />}
      </div>
    </div>
  );
};
