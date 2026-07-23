import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-on-surface dark:text-on-surface font-label-caps text-label-caps w-full py-section-gap border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 mb-8 md:mb-0">
          <span className="font-headline-sm text-headline-sm text-on-surface">STUDIO</span>
          <span className="text-on-surface-variant">© 2024 Studio. All rights reserved.</span>
        </div>
        
        <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row justify-start md:justify-end gap-8 md:items-end">
          <a className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-300" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-300" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-300" href="#">Studio Process</a>
        </div>
      </div>
    </footer>
  );
}
