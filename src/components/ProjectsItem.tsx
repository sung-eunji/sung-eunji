import { useParams } from 'react-router-dom';
import ProjectData from './ProjectData';
import { useNavigate } from 'react-router-dom';

export default function ProjectItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProject = ProjectData.find((item) => item.id === Number(id));

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-[3rem] py-[5rem] dark:bg-gray-700 dark:text-gray-200 items-center ">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="flex flex-col items-center gap-[0.5rem]">
          <div className="flex gap-[1rem]">
            <a href={selectedProject.github}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/github.svg'}
                width={20}
              />
            </a>
            <a href={selectedProject.demoLink}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/link.svg'}
                width={20}
              />
            </a>
          </div>

          <h1 className="text-2-700">{selectedProject.title}</h1>
          <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200">
            {selectedProject.position}
          </h2>
          <p className="text-1-300 text-gray-500 dark:text-gray-400">
            {selectedProject.duration}
          </p>
        </div>
        <ul className="flex gap-[1rem] text-0.7-300">
          {selectedProject.stacks.map((stack, index) => (
            <li
              className="bg-orange-300 dark:text-gray-600 rounded-[1rem] p-[0.3rem]"
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[2rem] items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-1.5-500 pb-[1rem]">
            From this Project, I earned...
          </h1>
          <div className="w-[45rem] flex flex-col gap-[2rem]">
            <div className="text-1.25-300 text-start">
              <h2 className="pb-[1rem]">1. Dynamic Data Management</h2>
              <p>
                Through working on this project, I developed a solid
                understanding of managing dynamic data, including detecting
                changes and optimizing state updates. This experience sharpened
                my ability to handle complex data flows and improve performance,
                particularly in rendering.
              </p>
            </div>
            <div className="text-1.25-300 text-start">
              <h2 className="pb-[1rem]">2. Pair and Group Programming</h2>
              <p>
                Participating in pair and group programming sessions allowed me
                to become more adaptable to different working styles. Working
                side-by-side with teammates not only improved my technical
                skills but also enhanced my ability to give and receive
                constructive feedback. This helped create a stronger, more
                cohesive team dynamic.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-1.5-500 pb-[1rem]">
            Challenges Faced During the Project
          </h1>
          <div className="w-[45rem] flex flex-col gap-[2rem]">
            <div className="text-1.25-300 text-start ">
              <h2 className="pb-[1rem]">1. Rendering Speed Optimization</h2>
              <p>
                Managing dynamic data with hooks was difficult due to
                performance issues, including image flickering, background image
                load delays, and map function errors that occasionally led to
                missing content or error pages. These problems significantly
                affected the user experience.
              </p>
            </div>
            <div className="text-1.25-300 text-start">
              <h2 className="pb-[1rem]">
                2. Confusion in Team Roles during Pair Programming
              </h2>
              <p>
                In the initial stages of pair and group programming sessions,
                there was some confusion surrounding the driver and navigator
                roles, which led to inefficiencies. This made it challenging for
                the team to stay aligned and hindered the progress at times.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-1.5-500 pb-[1rem]">Solutions Implemented</h1>
          <div className="w-[45rem] flex flex-col gap-[2rem]">
            <div className="text-1.25-300 text-start">
              <h2 className="pb-[1rem]">1.Segmenting Data Processing Stages</h2>
              <p>
                To address data management issues, we implemented try-catch
                blocks to break down data processing stages. This solution
                helped isolate errors, enabling quicker detection, handling, and
                recovery. Additionally, it improved the application's
                performance by streamlining the data flow.
              </p>
            </div>
            <div className="text-1.25-300 text-start">
              <h2 className="pb-[1rem]">
                2.Role Clarification and Improved Communication
              </h2>
              <p>
                As a team, we clarified the roles of driver and navigator in
                pair programming, which significantly improved team
                coordination. Through regular communication and feedback, we
                fostered a more collaborative environment that helped us move
                past initial inefficiencies and work more effectively together.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[45rem] flex flex-col gap-[2rem] items-start text-1.25-300 ">
          <h1 className="text-1.5-500">Result</h1>
          <p className="text-start">
            As a result of overcoming these challenges, I strengthened my
            abilities in dynamic data management and performance optimization,
            learning to handle complex rendering issues more effectively.
            Additionally, the team collaboration experience, particularly
            through pair and group programming, enhanced my communication skills
            and adaptability in a team setting. Finally, I developed a deep
            understanding of error handling and debugging, which further
            improved the overall quality and performance of the application.
          </p>
        </div>
      </div>

      <button
        className="hover:bg-gray-200 p-[0.4rem] rounded-[1rem]"
        onClick={() => {
          navigate('/projects');
        }}
      >
        ← 돌아가기
      </button>
    </div>
  );
}
