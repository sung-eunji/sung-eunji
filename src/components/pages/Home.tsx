import BriefIntro from '../BriefIntro';

export default function Home() {
  return (
    <div className="dark:bg-gray-700 h-[47rem] pt-[10rem] flex flex-col sm:h-auto sm:pb-[10rem] sm:w-[40rem]">
      <div className="flex px-[6.5rem] gap-[2rem] items-center sm:px-[2.5rem] sm:flex-col-reverse md:justify-around md:px-[2rem]">
        <BriefIntro />
        <img
          className="h-[20rem] rounded-[20rem] shadow-lg shadow-gray-300 sm:h-[10rem] md:h-[14rem]"
          src="/assets/profile1.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
