interface DarkMode {
  toggleMode: () => void;
  darkmode: string;
}

export default function DarkMode({ toggleMode, darkmode }: DarkMode) {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 md:w-6 md:h-6 sm:w-5 sm:h-5"
      onClick={toggleMode}
    >
      <img
        className="hover:invert-50 w-full h-full sm:w-[1.2rem] sm:h-[1.2rem]"
        src={
          darkmode === 'dark' ? '/assets/darkmode.svg' : '/assets/lightmode.svg'
        }
        alt="Toggle mode"
        width={17}
      />
    </button>
  );
}
