const About = () => {
    return (
      <div id="about" className="bg-black flex justify-center items-start">
        <div className="bg-gradient-to-r from-[#0a1f3d] to-[#4c1d95] text-white p-16 rounded-lg shadow-xl mt-14 relative overflow-hidden">
          <h2 className="text-5xl font-bold text-center text-white mb-6 relative z-10">
            About Me
          </h2>
          <p className="text-xl text-gray-200 relative z-10">
          Greetings, Earthling. 👽 I am XBJO, a coder by day, dreamer by night. 🌙 I explore the vast universe of software development 🌌, creating digital worlds that are as boundless as the stars themselves. My journey through the cosmos of code is fueled by curiosity, innovation, and the desire to push the boundaries of what’s possible. 🌠
          </p>
          <p className="text-xl text-gray-200 mt-4 relative z-10">
          If you are ready to launch into the next big adventure or collaborate on something stellar, feel free to reach out. I’m always on the lookout for new galaxies to conquer. 🌌🔭
          </p>
  
          <div className="absolute bottom-0 left-0 w-14 h-14 animate-run z-10">
            <img src="/main.png" alt="Running Character" className="w-full h-full object-contain" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff55] via-[#ffffff22] to-transparent z-0 blur-3xl"></div>
        </div>
      </div>
    );
  };
  
  export default About;
  