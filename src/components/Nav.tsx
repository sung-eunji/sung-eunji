import React from 'react';

import { Link } from 'react-router-dom';

// import { Route } from 'react-router-dom';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Work from '../pages/Works';

const Nav: React.FC = () => {
  return (
    <div className="flex gap-[6rem] text-1.7-500 sm:text-0.9-500 sm:gap-[1rem] md:gap-[3rem] items-center justify-center md:justify-around ">
      <button>
        <Link
          to={`/about`}
          className="text-black hover:text-orange-400 dark:text-gray-200 dark:hover:text-orange-400"
        >
          About
        </Link>
      </button>
      <button>
        <Link
          to={`/works`}
          className="text-black hover:text-orange-400 dark:text-gray-200 dark:hover:text-orange-400 "
        >
          Works
        </Link>
      </button>
      <button>
        <Link
          to={`/projects`}
          className=" text-black hover:text-orange-400 dark:text-gray-200 dark:hover:text-orange-400 "
        >
          Projects
        </Link>
      </button>
    </div>
  );
};

export default Nav;
