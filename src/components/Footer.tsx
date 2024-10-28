import { useState, useEffect } from 'react';

export default function Footer() {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : [0];
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const incrementLikes = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = (newLikes[index] || 0) + 1;
    setLikes(newLikes);
  };

  return (
    <div className="flex flex-col gap-[1rem] justify-center items-center dark:bg-gray-700 pb-[3rem] w-[100%] ">
      <div className="flex gap-[1rem] items-center w-[100%] justify-center">
        <a href="https://www.linkedin.com/in/eunji-sung-80786a27a/">
          <img
            className="dark:filter dark:invert dark:brightness-200"
            src={'/assets/linkedin.svg'}
            width={25}
          />
        </a>

        <a href="https://github.com/sung-eunji">
          <img
            className="dark:filter dark:invert dark:brightness-200"
            src={'/assets/github.svg'}
            width={24}
          />
        </a>
        <div className="flex items-center hover:border-b-[0.1rem] hover:dark:border-b-gray-700 hover:border-gray-500 dark:invert">
          <button onClick={() => incrementLikes(0)}>
            <img
              src="/assets/thumb-up.svg"
              className="w-[1.5rem]"
              alt="thumb"
            />
          </button>
          <div className="dark:text-gray-900">{likes[0]}</div>
        </div>
      </div>
      <div className="text-0.7-300 text-gray-600 dark:text-gray-200">
        Copyright © 2024 - All right reserved by Eunji Sung
      </div>
    </div>
  );
}
