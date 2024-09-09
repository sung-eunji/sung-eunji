interface DarkMode {
  toggleMode: () => void;
  darkmode: string;
}

export default function DarkMode({ toggleMode, darkmode }: DarkMode) {
  return (
    <div className="flex">
      <button className=" w-[12rem] h-[12rem]" onClick={toggleMode}>
        <img
          src={
            darkmode === 'dark'
              ? 'src/assets/darkMode.svg'
              : 'src//assets/lightMode.svg'
          }
          alt="Toggle mode"
          width={40}
        />
      </button>
    </div>
  );
}
