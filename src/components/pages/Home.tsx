import BriefIntro from '../BriefIntro';

export default function Home() {
  return (
    <div className="dark:bg-gray-700 h-[47rem] pt-[10rem] flex flex-col sm:h-auto sm:pb-[10rem] sm:w-full sm:pt-[5rem]">
      <div className="flex px-[6.5rem] gap-[2rem] items-center sm:px-[2.5rem] sm:flex-col-reverse md:justify-around md:px-[2rem]">
        <BriefIntro />
        <img
          className="object-cover h-[20rem] w-[20rem] rounded-full shadow-lg shadow-gray-300 sm:h-[8rem] sm:w-[8rem] md:h-[10rem] md:w-[10rem]"
          src="/assets/profile-photo.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
}
