import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex space-x-0 w-full mb-16 pt-3 text-center">
      <Link href="/" className="flex gap-2 flex-center" />
      <Image src="/assets/images/logo.svg" />
    </nav>
  );
};

export default Nav;
