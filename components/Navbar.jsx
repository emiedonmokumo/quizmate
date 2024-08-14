'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import React from 'react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className='mb-5 sm:mb-12 sm:mt-2'>
      <div className='mb-5 flex justify-between items-center'>
        <Link href={'/dashboard'}><img src="/logo.svg" className='sm:w-32' alt="Logo" /></Link>
        <ul className='flex space-x-4 items-center'>
          {session ? (
            <button className='bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] text-white p-3 rounded-md sm:text-sm' onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
          ) : (
            <>
              <li>
                <Link
                  className='bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] text-white p-3 rounded-md sm:text-sm'
                  href={'/signup'}
                >Signup</Link>
              </li>
              <li>
                <Link className='border border-[#9D69FF] text-white p-3 rounded-md hover:bg-gradient-to-r hover:from-[#9D69FF] hover:to-[#3E6EFF] sm:text-sm' href={'/'}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className='sm:mt-10'>
        <h2 className='font-bold text-white text-4xl text-center sm:text-2xl sm:px-3'>
          Study Smarter with
          <span className='font-bold bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] text-transparent bg-clip-text'> Quizmate </span>🤝
        </h2>
        <p className='text-center text-white text-lg pt-2 sm:text-sm'>
          Instant Answers to all questions
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
