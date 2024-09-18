import { useNavigate } from 'react-router-dom';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    // 해당 프로젝트의 상세 페이지로 이동
    navigate(`/projects/${id}`);
  };

  return (
    <div className="dark:bg-gray-700 sm:w-[38rem]">
      <ProjectCard onCardClick={handleCardClick} />
    </div>
  );
}
