import BriefIntro from '../BriefIntro';

export default function Home() {
  return (
    <div className="dark:bg-gray-700 h-[47rem] pt-[10rem] flex flex-col sm:w-[40rem]">
      <div className="flex px-[6.5rem] gap-[2rem] items-center sm:px-[2.5rem]">
        <BriefIntro />
        <img
          className="h-[20rem] rounded-[20rem] shadow-lg shadow-gray-300"
          src="/assets/profile1.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
