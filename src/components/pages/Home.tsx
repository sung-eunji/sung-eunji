import BriefIntro from '../BriefIntro';

export default function Home() {
  return (
    <div className="dark:bg-gray-700 h-[50rem] py-[10rem]">
      <div className="flex px-[8rem] gap-[2rem] items-center">
        <BriefIntro />
        <img
          className="h-[20rem] rounded-[2rem]"
          src="./src//assets/profile.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
}
