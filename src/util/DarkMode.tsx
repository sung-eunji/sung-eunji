interface DarkMode {
  toggleMode: () => void;
  darkmode: string;
}

export default function DarkMode({ toggleMode, darkmode }: DarkMode) {
  return (
    <button
      className="flex items-center justify-center w-[8rem] h-[8rem] md:w-[4rem] md:h-[4rem]  sm:h-[1rem]"
      onClick={toggleMode}
    >
      <img
        className="hover:filter hover:invert hover:border-orange-200"
        src={
          darkmode === 'dark'
            ? 'src/assets/darkMode.svg'
            : 'src//assets/lightMode.svg'
        }
        alt="Toggle mode"
        width={25}
      />
    </button>
  );
}
