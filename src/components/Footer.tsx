import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex gap-[1rem] justify-center items-center">
      <Link to={'https://linkedin.com'}>
        <img src={'./src/assets/linkedin.svg'} width={30} />
      </Link>
      <Link to={'https://github.com'}>
        {' '}
        <img src={'./src/assets/github.svg'} width={29} />
      </Link>
    </div>
  );
}
