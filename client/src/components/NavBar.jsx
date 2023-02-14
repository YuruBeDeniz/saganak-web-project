import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
              <Link className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/'>Home</Link>
              <Link className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/about-me'>About Me</Link>
              <Link className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/projects'>Projects</Link>
              <Link className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/hobies'>Hobies</Link>
              <Link className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to='/contact'>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
