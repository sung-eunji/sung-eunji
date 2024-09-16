interface DarkMode {
  toggleMode: () => void;
  darkmode: string;
}

export default function DarkMode({ toggleMode, darkmode }: DarkMode) {
  return (
    <div className="flex">
      <button className=" w-[8rem] h-[8rem]" onClick={toggleMode}>
        <img
          src={
            darkmode === 'dark'
              ? 'src/assets/darkMode.svg'
              : 'src//assets/lightMode.svg'
          }
          alt="Toggle mode"
          width={25}
        />
      </button>
    </div>
  );
}
