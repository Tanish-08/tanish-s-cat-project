
import React from 'react';

export const Cat: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5c.67 0 1.35.09 2 .26 1.78.47 3.34 1.47 4.5 3.1A9 9 0 0 1 8.24 20.32c-2.82-1.8-4.24-4.7-4.24-8.32 0-5.1 3.9-9 9-9z"/>
    <path d="M16 9h.01"/><path d="M12 11h.01"/>
  </svg>
);

export const PawPrint: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-7 0V15a5 5 0 0 1 5-5z" />
  </svg>
);

export const Stethoscope: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5.4 2l-1-1.7a.3.3 0 0 0-.5 0l-1 1.7a.3.3 0 1 0 .6.3l1-1.8 1 1.8Z"/><path d="M18 2.8c.9-.5 1.8-.8 2.7-.9"/><path d="M5.3 3.3c-1.3 1-2.3 2.4-2.9 4"/><path d="M18.7 3.3c1.3 1 2.3 2.4 2.9 4"/><path d="M9.8 12.5a.5.5 0 0 0-.8 0L5.5 16a.5.5 0 0 0 0 .8l.4.4a.5.5 0 0 0 .8 0l3.5-3.5a.5.5 0 0 0 0-.8Z"/><path d="M17.5 15.6a.5.5 0 0 0 0 .8L14 20a.5.5 0 0 0 0 .8l.4.4a.5.5 0 0 0 .8 0l3.5-3.5a.5.5 0 0 0 0-.8l-.4-.4a.5.5 0 0 0-.8 0Z"/><path d="M2.4 7.3C3 13.1 8.3 18 15 18c1.8 0 3.5-.4 5.1-1.1"/>
  </svg>
);

export const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const MessageSquare: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const Bowl: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 12h12a6 6 0 0 1-12 0Z"/>
  </svg>
);
