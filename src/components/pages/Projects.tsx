import { useNavigate } from 'react-router-dom';
import ProjectCardList from '../ProjectCardList';

export default function Projects() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="dark:bg-gray-700 sm:w-full">
      <ProjectCardList onCardClick={handleCardClick} />
    </div>
  );
}
