"use client";
import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    const aboutLink = document.getElementById('aboutLink');
    const homeLink = document.getElementById('homeLink');
    const projectLink = document.getElementById('projectLink');

    aboutLink.addEventListener('click', (event) => {
      event.preventDefault(); 
      const aboutSection = document.getElementById('about'); 
      aboutSection.scrollIntoView({ behavior: 'smooth' }); 
    });

    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      const homeSection = document.getElementById('spline'); 
      homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectLink.addEventListener('click', (event) => {
      event.preventDefault();
      const projectSection = document.getElementById('project'); 
      projectSection.scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      aboutLink.removeEventListener('click', () => {});
      homeLink.removeEventListener('click', () => {});
      projectLink.removeEventListener('click', () => {});
    }
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="flex px-8 py-3 justify-between">
        <div className="flex justify-center items-center"></div>
        <div className="flex px-2 pl-6 space-x-6 flex justify-center py-2">
          <div className="flex justify-between items-center cursor-pointer">
            <div id="homeLink" className="text-white text-xl font-bold hover:text-yellow-500 hover:scale-105 transition-all duration-300">
              HOME
            </div>
          </div>
          <div id="aboutLink" className="text-white text-xl font-bold hover:text-yellow-500 hover:scale-105 transition-all duration-300">
            ABOUT
          </div>
          <div id="projectLink" className="text-white text-xl font-bold hover:text-yellow-500 hover:scale-105 transition-all duration-300">
            PROJECT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
