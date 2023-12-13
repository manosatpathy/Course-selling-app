import { useState } from 'react';
import { CodeBracketIcon, SunIcon, MoonIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className='lg:container lg:mx-auto px-4 md:px-8 lg:px-16'>
      <div className='flex justify-between items-center py-4'>
        <div className='flex items-center gap-8'>
          <CodeBracketIcon className='h-10 w-10 text-violet-700' />
          <ul className='hidden md:flex gap-8'>
            <li className='text-gray-700 hover:text-violet-500 transition duration-300 cursor-pointer font-semibold'>Courses</li>
            <li className='text-gray-700 hover:text-violet-500 transition duration-300 cursor-pointer font-semibold'>About</li>
            <li className='text-gray-700 hover:text-violet-500 transition duration-300 cursor-pointer font-semibold'>Roadmaps</li>
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <button className='lg:hidden pr-4'>
            {theme ? <SunIcon className='h-7 w-7' onClick={toggleTheme} /> : <MoonIcon className='h-7 w-7' onClick={toggleTheme} />}
          </button>
          <button className='hidden lg:block pr-10 '>
            {theme ? <SunIcon className='h-7 w-7' onClick={toggleTheme} /> : <MoonIcon className='h-7 w-7' onClick={toggleTheme} />}
          </button>
          <ShoppingCartIcon className='h-8 w-8 text-gray-700' />
          <UserIcon className='h-8 w-8 text-gray-700' />
        </div>
      </div>
    </div>
  );
};

export default Header;
