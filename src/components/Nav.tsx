import React from 'react';

import { Link } from 'react-router-dom';

// import { Route } from 'react-router-dom';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Work from '../pages/Works';

const Nav: React.FC = () => {
  return (
    <div className="flex gap-[2rem] text-1.25-500 sm:w-[10rem] sm:text-1-500 sm:gap-[1.2rem]">
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
