interface DarkMode {
  toggleMode: () => void;
  darkmode: string;
}

export default function DarkMode({ toggleMode, darkmode }: DarkMode) {
  return (
    <button
      className="flex items-center justify-center w-[10rem] h-[10rem] md:w-[4rem] md:h-[4rem] sm:h-[2rem] sm:w-[2rem]"
      onClick={toggleMode}
    >
      <img
        className="hover:invert-50 "
        src={
          darkmode === 'dark' ? '/assets/darkmode.svg' : '/assets/lightmode.svg'
        }
        alt="Toggle mode"
        width={20}
      />
    </button>
  );
}
