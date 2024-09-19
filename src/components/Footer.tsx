export default function Footer() {
  return (
    <div className="flex flex-col gap-[1rem] justify-center items-center dark:bg-gray-700 pb-[3rem] sm:w-[40rem]">
      <div className="flex gap-[1rem]">
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
      </div>
      <div className="text-0.7-300 text-gray-600 dark:text-gray-200">
        Copyright © 2024 - All right reserved by Eunji Sung
      </div>
    </div>
  );
}
