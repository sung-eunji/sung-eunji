export default function Footer() {
  return (
    <div className="flex gap-[1rem] justify-center items-center dark:bg-gray-700 pb-[3rem] sm:w-[40rem]">
      <a href="https://www.linkedin.com/in/eunji-sung-80786a27a/">
        <img
          className="dark:filter dark:invert dark:brightness-200"
          src={'./src/assets/linkedin.svg'}
          width={25}
        />
      </a>

      <a href="https://github.com/sung-eunji">
        <img
          className="dark:filter dark:invert dark:brightness-200"
          src={'./src/assets/github.svg'}
          width={24}
        />
      </a>
    </div>
  );
}
