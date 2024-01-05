'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { signOut, signIn, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isLoggedIn = false;
  return (
    <nav className="flex space-x-0 w-full mb-16 pt-3 text-center">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="font-bold">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
            >
              Create Post
            </Link>
            <button
              type="button"
              onClick={signOut}
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
