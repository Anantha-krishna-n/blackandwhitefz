import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-background/80 dark:bg-background/80 fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/30 dark:border-outline-variant/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-[80px]">
        <a className="font-headline-sm text-headline-sm tracking-tighter text-on-background dark:text-on-background" href="#">STUDIO</a>
        <div className="hidden md:flex gap-8">
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-background transition-colors font-body-md text-body-md" href="#">Home</a>
          <a className="text-on-background font-semibold border-b border-on-background pb-1 font-body-md text-body-md" href="#">Services</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-background transition-colors font-body-md text-body-md" href="#">Contact</a>
        </div>
        <button className="border border-outline text-on-background hover:bg-surface-variant/10 transition-all duration-300 px-6 py-3 rounded-none font-label-caps text-label-caps uppercase tracking-widest hidden md:block">
          Inquire
        </button>
        <button className="md:hidden text-on-background">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
