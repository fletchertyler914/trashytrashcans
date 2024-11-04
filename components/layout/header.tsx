'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TTCLogo } from '@/components/ttc-logo';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className='container px-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='w-40 h-12 relative'>
            <TTCLogo className='w-full h-full' />
          </div>

          <nav className='hidden md:flex items-center gap-8'>
            {['ABOUT', 'DESIGNS', 'JOIN NOW'].map((item) => (
              <Button
                key={item}
                variant='ghost'
                className='text-lg font-bold hover:text-primary hover:scale-110 transition-transform'
                style={{ fontFamily: 'Permanent Marker' }}
              >
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>
                  {item}
                </Link>
              </Button>
            ))}
          </nav>

          <Button
            variant='ghost'
            size='icon'
            className='md:hidden hover:text-primary'
          >
            <Menu className='h-6 w-6' />
          </Button>
        </div>
      </div>
    </header>
  );
}
