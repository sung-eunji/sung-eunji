import React from 'react';

import { Link } from 'react-router-dom';

// import { Route } from 'react-router-dom';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Work from '../pages/Works';

const Nav: React.FC = () => {
  return (
    <div className="flex gap-[2rem] ">
      <button>
        <Link to={`/about`} className="text-black">
          About
        </Link>
      </button>
      <button>
        <Link to={`/works`} className="text-black">
          Works
        </Link>
      </button>
      <button>
        <Link to={`/projects`} className=" text-black">
          Projects
        </Link>
      </button>
    </div>
  );
};

export default Nav;
