import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex gap-[1rem] justify-center items-center">
      <Link to={'https://instagram.com'}>
        <img src={'./src/assets/linkedin.svg'} width={30} />
      </Link>
      <Link to={'https://instagram.com'}>
        {' '}
        <img src={'./src/assets/github.svg'} width={29} />
      </Link>
    </div>
  );
}
