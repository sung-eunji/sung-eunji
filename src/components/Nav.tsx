import React from 'react';

import { Link } from 'react-router-dom';

// import { Route } from 'react-router-dom';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Work from '../pages/Works';

const Nav: React.FC = () => {
  return (
    <div className="flex gap-[6rem] text-1.7-500 sm:w-full sm:text-0.9-500 sm:gap-[0.5rem]">
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
